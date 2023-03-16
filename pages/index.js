import Head from 'next/head'
import Image from 'next/image'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        
        <div className="mainpage"  >
          <div class="container">
            <div class="Image-1">
              <img src="\images\image-web-3-desktop.jpg"  >
              </img>
            </div>
            <div class="News">
              <div class="news_section" >
                <div class="news_headline" >
                  <p>
                    New
                  </p>
                </div>
                <div class="news_article" >
                  <p class="news_article_title" >
                    Hydrogen VS Electric Cars
                  </p>
                  <p class="news_article_content" >
                    Will hydrogen-fueled cars ever catch up to EV's?
                  </p>
                  <hr class="white_line" />
                  <p class="news_article_title" >
                    The downsides of AI Artistry
                  </p>
                  <p class="news_article_content" >
                    What are the possible adverse effects of on-demand AI image generation?
                  </p>
                  <hr class="white_line" />
                  <p class="news_article_title" >
                    Is VC Funding Drying Up?
                  </p>
                  <p class="news_article_content" >
                    Private funding by VC firms is down 50% YOY. We take a look at what that means.
                  </p>
                </div> 
              </div>
            </div>
            <div class="Bright-future">
              <div className="Bright-future-textbox">
                <p>
                  The Bright Future of Web 3.0?
                </p>
              </div>
            </div>
            <div class="Read-more">
              <div class="Read-more-section" >
                <p>
                  We dive into the next evolution of the web that 
                  claims to put the power of that platforms back 
                  into the hands of the people. But is it really 
                  fufilling it's promise? 
                </p>
                <button>
                  READ MORE
                </button>
              </div>
            </div>
            <div class="retro1 ">
              <div class="retro-section" >
                <div class="retro-section-image">
                  <img src="\images\image-retro-pcs.jpg"/>
                </div>
                <div class="retro-section-text" >
                  <p class="grey-number" >01</p>
                  <p class="headline" >Reviving Retro PCs</p>
                  <p class="article" >what happens when old PCs are given modern upgrades?</p>
                </div>
              </div>
            </div>
            <div class="retro2">
              <div class="retro-section" >
                <div class="retro-section-image">
                  <img src="\images\image-top-laptops.jpg"/>
                </div>
                <div class="retro-section-text" >
                  <p class="grey-number" >02</p>
                  <p class="headline" >Top ten laptop of 2022</p>
                  <p class="article" >what happens when old PCs are given modern upgrades?</p>
                </div>
              </div>
            </div>
            <div class="retro3">
              <div class="retro-section" >
                <div class="retro-section-image">
                  <img src="\images\image-gaming-growth.jpg"/>
                </div>
                <div class="retro-section-text" >
                  <p class="grey-number" >03</p>
                  <p class="headline" >The Growth of Gaming</p>
                  <p class="article" >what happens when old PCs are given modern upgrades?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className="logo">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}