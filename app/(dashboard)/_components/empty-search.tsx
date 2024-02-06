import Image from "next/image";
import React from "react";

const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-search.svg"
        width={140}
        height={140}
        alt="sem resultados"
      />

      <h2 className="text-2xl font-semibold mt-6">Sem resultados obtidos</h2>

      <p className="text-muted-foreground text-sm mt-2">
        Tente fazer uma nova pesquisa
      </p>
    </div>
  );
};

export default EmptySearch;
