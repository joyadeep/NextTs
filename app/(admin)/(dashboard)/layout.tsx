import Sidebar from "@/components/Sidebar"

export default function SkillLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
        <Sidebar/>
        <main className=" w-full px-4 pt-5">
        {children}
        </main>
    </div>
  )
}
