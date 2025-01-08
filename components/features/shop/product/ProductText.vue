<script lang="ts" setup>
import { sortVariant, type Variant } from "./sortDataVariants";

interface Props {
  variants?: Variant[];
  isNew?: boolean;
  price: number;
}

const props = defineProps<Props>();

type OrganizedVariants = Record<string, Record<string, Variant[]>>;
function organizeVariants(variants: Variant[]): OrganizedVariants {
  const organized: OrganizedVariants = {};

  variants.forEach((variant) => {
    // Pour chaque type d'attribut, on organise les variantes
    variant.type.forEach(({ name, value }) => {
      if (!organized[name]) {
        organized[name] = {};
      }

      if (!organized[name][value]) {
        organized[name][value] = [];
      }

      organized[name][value].push(variant);
    });
  });

  return organized;
}

// Initialisation et organisation des variantes
const organizedVariants = organizeVariants(props.variants!);

// Fonction pour obtenir les sélections par défaut (premières valeurs)
function getDefaultSelections(organizedVariants: OrganizedVariants) {
  const selections: Record<string, string> = {};

  Object.keys(organizedVariants).forEach((type) => {
    const firstValue = Object.keys(organizedVariants[type])[0];
    if (firstValue) {
      selections[type] = firstValue;
    }
  });

  return selections;
}

// Fonction pour obtenir la variante sélectionnée
function getSelectedVariant(
  organizedVariants: OrganizedVariants,
  selections: Record<string, string>
): Variant | undefined {
  // Trouver la variante correspondant aux sélections
  return props.variants.find((variant) =>
    variant.type.every(({ name, value }) => selections[name] === value)
  );
}

// Fonction pour obtenir les tailles disponibles pour une couleur spécifique
function getAvailableSizesForColor(
  organizedVariants: OrganizedVariants,
  selectedColor: string
): string[] {
  const sizes: string[] = [];

  // On parcourt les variantes et on récupère les tailles associées à la couleur sélectionnée
  props.variants.forEach((variant) => {
    const color = variant.type.find((t) => t.name === "couleur")?.value;
    const size = variant.type.find((t) => t.name === "taille")?.value;

    if (color === selectedColor && size && !sizes.includes(size)) {
      sizes.push(size);
    }
  });

  return sizes;
}

console.log(organizedVariants);

// Sélections par défaut
const defaultSelections = getDefaultSelections(organizedVariants);

// Sélection initiale basée sur les valeurs par défaut
let selectedVariant = getSelectedVariant(organizedVariants, defaultSelections);

// Affichage des sélections par défaut et de la variante sélectionnée
// console.log("Sélections par défaut :", defaultSelections);
// console.log("Variante sélectionnée :", selectedVariant);

// Simuler un changement de couleur et afficher les tailles associées
const selectedColor = ref("rouge"); // Supposons que l'utilisateur a sélectionné "bleu"
const availableSizes = getAvailableSizesForColor(
  organizedVariants,
  selectedColor.value
);

// console.log(
//   `Tailles disponibles pour la couleur ${selectedColor.value}:`,
//   availableSizes
// );

// Supposons que l'utilisateur sélectionne une taille après avoir sélectionné la couleur
const selectedSize = availableSizes[0]; // Par exemple, la première taille disponible
const newSelections = {
  ...defaultSelections,
  couleur: selectedColor.value,
  taille: selectedSize,
};

// Mise à jour de la variante sélectionnée en fonction de la couleur et de la taille
selectedVariant = getSelectedVariant(organizedVariants, newSelections);
console.log(selectedVariant);

console.log(organizedVariants[Object.keys(organizedVariants)[0]]);
// console.log(Object.keys(organizedVariants)[0]);
</script>

<template>
  <div>
    <h1>Product Title</h1>
    <p v-if="isNew">Nouveau</p>
    <p>
      {{
        new Intl.NumberFormat("fr-FR", {
          style: "currency",
          currency: "EUR",
        }).format(price)
      }}
    </p>

    <!-- <div v-for="variant in variants">
      {{ variant.type }}
    </div> -->

    <div>
      <select @change="selectedColor = $event.target.value">
        <option
          v-for="(variant, index) in organizedVariants[
            Object.keys(organizedVariants)[0]
          ]"
          :value="index"
          :selected="index == selectedColor"
        >
          {{ index }}
        </option>
      </select>

      <template
        v-for="(variant, index) in organizedVariants[
          Object.keys(organizedVariants)[0]
        ]"
      >
        <select v-if="index === selectedColor">
          <option
            v-for="variant2 in variant"
            :value="variant2"
            :selected="variant2.type[1].value === selectedColor"
          >
            {{ variant2.type[1].value }}
          </option>
        </select>
      </template>

      <!-- <select>
        <option
          v-for="(variant, index) in organizedVariants[
            Object.keys(organizedVariants)[0]
          ]"
          :value="index"
        >
          {{ index }}
        </option>
      </select> -->

      <!-- <div
        v-for="(variant, index) in organizedVariants[
          Object.keys(organizedVariants)[0]
        ]"
      ></div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
