import AlertWithToggleSection from "@/components/organisms/dashboard/alertWithToggleSection";

export default async function Applications({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const name = (await params).name;

  return (
    <div className="flex flex-col gap-6">
      <AlertWithToggleSection />
      <h1 className="text-4xl font-bold">Applications {name}</h1>
    </div>
  );
}
