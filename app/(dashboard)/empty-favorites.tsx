import Image from "next/image";
import React from "react";

const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-favorites.svg"
        width={140}
        height={140}
        alt="sem resultados"
      />

      <h2 className="text-2xl font-semibold mt-6">Sem boards favoritos</h2>

      <p className="text-muted-foreground text-sm mt-2">
        Tente adicionar um board no seus favoritos
      </p>
    </div>
  );
};

export default EmptyFavorites;
