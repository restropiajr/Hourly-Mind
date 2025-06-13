export default function Home() {
  return (
    <div className="mt-[100px]">
      <div className="row-one">
        <div className="col-one flex min-h-screen flex-col items-center justify-center gap-4">
          <h1 className="text-center text-4xl text-white md:text-6xl">
            Welcome to {''}
            <span className="font-bold tracking-wide text-white">GameExplorer</span>
          </h1>
          <p className="px-4 text-center text-lg text-white md:text-xl">
            An interactive video game archive to explore and review video games!
          </p>
        </div>
      </div>
    </div>
  )
}
