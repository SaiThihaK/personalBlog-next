import Image from 'next/image'
import Slider from "@/Components/Slider"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="container">
        <Slider/>
      </div>
    </main>
  )
}
