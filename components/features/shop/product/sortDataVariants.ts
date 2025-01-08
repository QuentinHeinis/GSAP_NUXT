export interface Variant {
  type: { name: string; value: string; importance: number }[];
  name: string;
  price: number;
}

export const sortVariant = (variants: Variant[]) => {
  let data = [];

  const LinkTypeWithAllValues = (typeName: string, value: string) => {
    console.log(typeName, value);
  };
  console.clear();

  let couleur = ["rouge", "bleu"];

  variants.forEach((variant) => {
    // order by higher importance
    variant.type.sort((a, b) => {
      return b.importance - a.importance;
    });

    variant.type.forEach((type) => {
      LinkTypeWithAllValues(type.name, type.value);
    });
  });

  return data;
};

