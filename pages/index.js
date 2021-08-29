import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col font-sf font-light subpixel-antialiased tracking-tight mx-5">
      <Head>
        <title>Hitesh Nair</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="m-16 mt-40">
        <div className="flex flex-col font-c text-6xl">
          new here?
          <Link href="/about">
          <a className="flex flex-row mt-3">
            who on earth is Hitesh? →
          </a>
          </Link>
        </div>
      </section>

      <section className="m-16">
        <div className="grid grid-cols-3 w-full">
          <div className="flex flex-col">
            <h2 className="text-4xl font-normal mb-5">Stuff</h2>
            <div className="my-5">
              <h3 className="font-c text-3xl underline"><a href="#">rendr</a></h3>
              <p className="text-xl my-2">
              Serverless drag-and-drop
              <br/>cloud rendering for Blender
              </p>
            </div>

            <div className="my-3">
              <h3 className="font-c text-3xl underline"><a href="#">playlist hunt</a></h3>
              <p className="text-xl my-2">
              Product Hunt, but for playlists.
              </p>
            </div>

          </div>
          
          <div className="flex flex-col col-span-2 w-full">
            <h2 className="text-4xl font-normal mb-5">Blog</h2>
            <div className="my-5">
              <h3 className="font-c text-3xl underline"><a href="#">
              How To Get People To Answer Your Surveys
                </a></h3>
              <p className="text-xl my-2">
              There's a simple trick to get people to do anything. Put a carrot on a string and hang it in front of their eyes.
              </p>
            </div>

            <div className="my-3">
              <h3 className="font-c text-3xl underline"><a href="#">
              The ONE thing Sundar Pichai taught me
                </a></h3>
              <p className="text-xl my-2">
              We don’t know each other in real life and this is clickbait. You should still read this.
              </p>
            </div>

          </div>
        

        </div>
      </section>



     
    </div>
  )
}
