import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col font-sf antialiased px-5 dark:bg-black dark:text-white">
      <Head>
        <title>Hitesh Nair</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="px-5 py-20 pb-16 md:p-16 md:pt-40">
        <div className="flex flex-col font-c text-4xl lg:text-6xl">
          new here?
          <Link href="/about">
          <a className="flex flex-row mt-3 text-blue-450 dark:text-red-500">
            who on earth is Hitesh? →
          </a>
          </Link>
        </div>
      </section>

      <section className="px-5 pt-10 pb-16 md:p-16">
        <div className="flex flex-col-reverse md:grid md:grid-cols-3">
          <div className="flex flex-col">
            <h2 className="text-4xl font-light my-5">Stuff</h2>

            <div className="my-5">
              <h3 className="font-c text-3xl text-blue-450 dark:text-red-500"><a href="#">rendr</a></h3>
              <p className="text-base my-2 text-black dark:text-blue-300">
              Serverless drag-and-drop
              <br/>cloud rendering for Blender
              </p>
            </div>

            <div className="my-5">
              <h3 className="font-c text-3xl text-blue-450 dark:text-red-500"><a href="#">playlist hunt</a></h3>
              <p className="text-base my-2 text-black dark:text-blue-300">
              Product Hunt, but for playlists.
              </p>
            </div>

          </div>
          
          <div className="flex flex-col md:col-span-2 md:w-full">
            <h2 className="text-4xl font-light my-5">Blog</h2>

            <div className="my-5">
              <h3 className="font-c text-3xl text-blue-450 dark:text-red-500"><a href="#">
              How To Get People To Answer Your Surveys
                </a></h3>
              <p className="text-base my-2 text-black dark:text-blue-300">
              There's a simple trick to get people to do anything. Put a carrot on a string and hang it in front of their eyes.
              </p>
            </div>

            <div className="my-5">
              <h3 className="font-c text-3xl text-blue-450 dark:text-red-500"><a href="#">
              The ONE thing Sundar Pichai taught me
                </a></h3>
              <p className="text-base my-2 text-black dark:text-blue-300">
              We don’t know each other in real life and this is clickbait. You should still read this.
              </p>
            </div>

            <div className="my-5">
              <h3 className="font-c text-3xl text-blue-450 dark:text-red-500"><a href="#">
              How To Get People To Answer Your Surveys
                </a></h3>
              <p className="text-base my-2 text-black dark:text-blue-300">
              There's a simple trick to get people to do anything. Put a carrot on a string and hang it in front of their eyes.
              </p>
            </div>

            <div className="my-5">
              <h3 className="font-c text-3xl text-blue-450 dark:text-red-500"><a href="#">
              The ONE thing Sundar Pichai taught me
                </a></h3>
              <p className="text-base my-2 text-black dark:text-blue-300">
              We don’t know each other in real life and this is clickbait. You should still read this.
              </p>
            </div>

          </div>
        

        </div>
      </section>



     
    </div>
  )
}
