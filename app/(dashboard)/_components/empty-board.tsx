"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { toast } from "sonner";

const EmptyBoard = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Meu primeiro board",
    })
      .then((id) => {
        toast.success("Board criado com sucesso");
      })
      .catch(() => toast.error("Erro ao criar board"));
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" width={110} height={110} alt="sem resultados" />

      <h2 className="text-2xl font-semibold mt-6">Crie seu primeiro board</h2>

      <p className="text-muted-foreground text-sm mt-2">
        Inicie criando um board para organizar suas tarefas
      </p>

      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Criar um board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoard;
