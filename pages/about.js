import Head from 'next/head'

export default function About() {
    return(
        <div>
            <Head>
                <title>Who the hell is Hitesh? - Hitesh Nair</title>
            </Head>
            <section className="m-16 mt-40">
        <div className="flex flex-col font-c text-6xl">
          New here?
          <a href="#" className="flex flex-row mt-3 hover:bg-green-300 hover:no-underline">
            Who the hell is Hitesh? →
          </a>
        </div>
      </section>
        </div>
    )
}