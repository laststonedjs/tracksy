"use client"

import Navbar from "@/app/(components)/Navbar"
import Sidebar from "@/app/(components)/Sidebar"
import StoreProvider, { useAppSelector } from "./redux"; // this is exported from our redux.tsx

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <div className={`flex bg-amber-50 text-gray-900 w-full min-h-screen`}>
      <Sidebar />
      <main className={`flex flex-col w-full h-full py-7 px-9 bg-amber-50 
        ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"}`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  )
}

const DashboardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <StoreProvider>

      <DashboardLayout>
        {children}
      </DashboardLayout>
    </StoreProvider>
  )
}

export default DashboardWrapper