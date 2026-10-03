import { NextRequest, NextResponse } from "next/server";

export type TipoParms = "notebook" | "tablet" | "smartphone";

type RouteParams = {
  params: Promise<{
    tipo: TipoParms;
  }>;
};

export async function GET( req: NextRequest, routeParams: RouteParams) {
  try {
    const { tipo } = await routeParams.params;

    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${tipo}`,
    );
    const body = await response.json();

    return NextResponse.json(body);
  } catch (err: unknown) {
    return NextResponse.json({ err: "Erro no servidor" }, { status: 500 });
  }
}
