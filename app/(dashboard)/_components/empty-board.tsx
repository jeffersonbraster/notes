import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const EmptyBoard = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" width={110} height={110} alt="sem resultados" />

      <h2 className="text-2xl font-semibold mt-6">Crie seu primeiro board</h2>

      <p className="text-muted-foreground text-sm mt-2">
        Inicie criando um board para organizar suas tarefas
      </p>

      <div className="mt-6">
        <Button size="lg">Criar um board</Button>
      </div>
    </div>
  );
};

export default EmptyBoard;
