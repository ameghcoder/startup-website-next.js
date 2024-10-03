
import Image from "next/image";
import { LockClosedIcon, DesktopIcon, DashboardIcon } from '@radix-ui/react-icons';

function CodeSnippet() {
  return (
    <pre className="text-[0.8125rem] leading-6 text-foreground/60 tab-size-2">
      <code>
        {`import { useState } from 'react'
import { Switch } from '@headlessui/react'

function Example() {
  const [enabled, setEnabled] = useState(true)

  return (
    <form action="/notification-settings" method="post">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        name="notifications"
      >
        {/* ... */}
      </Switch>
      <button>Submit</button>
    </form>
  )
}`}
      </code>
    </pre>
  );
}

function BentoGrids() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-card-foreground">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-pretty text-center text-4xl font-medium tracking-tight text-foreground/60 sm:text-5xl">
          Everything you need to deploy your app.
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-card border lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-foreground/60 max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-foreground/60 max-lg:text-center">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <Image
                    className="size-full object-cover object-top"
                    src="https://tailwindui.com/plus/img/component-images/bento-03-mobile-friendly.png"
                    alt=""
                    fill="true"
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-card border max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-foreground/60 max-lg:text-center">
                  Performance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-foreground/60 max-lg:text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                </p>
              </div>
              <div className="relative flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                <Image
                  className="w-full max-lg:max-w-xs"
                  src="https://tailwindui.com/plus/img/component-images/bento-03-performance.png"
                  alt=""
                  width={604}
                  height={206}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-card border"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-foreground/60 max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-foreground/60 max-lg:text-center">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                </p>
              </div>
              <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                <Image
                  src="https://tailwindui.com/plus/img/component-images/bento-03-security.png"
                  alt=""
                  width="732"
                  height="292"
                  layout="responsive"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-card border max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-lg/7 font-medium tracking-tight text-foreground/60 max-lg:text-center">
                  Powerful APIs
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-foreground/60 max-lg:text-center">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow">
                <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-popover shadow-2xl border-l border-t border-r">
                  <div className="flex bg-secondary ring-1 ring-white/5">
                    <div className="-mb-px flex text-sm font-medium leading-6 text-foreground">
                      <div className="border-b border-r border-input bg-foreground/5 px-4 py-2 text-foreground/60">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-input px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pb-14 pt-6">
                    <CodeSnippet />
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const links = [
    {
      ariaLabel: "add to slack",
      href: "#",
      imgSrc: "https://tailus.io/sources/blocks/tech-startup/preview/images/slack.png",
      imgAlt: "slack logo",
      text: "Slack"
    },
    {
      ariaLabel: "add to chat",
      href: "#",
      imgSrc: "https://tailus.io/sources/blocks/tech-startup/preview/images/chat.png",
      imgAlt: "chat logo",
      text: "Google Chat"
    },
    {
      ariaLabel: "add to zoom",
      href: "#",
      imgSrc: "https://tailus.io/sources/blocks/tech-startup/preview/images/zoom.png",
      imgAlt: "zoom logo",
      text: "Zoom"
    }
  ];

  const features = [
    {
      name: 'Push to deploy.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: DesktopIcon,
    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: LockClosedIcon,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: DashboardIcon,
    }];
  return (
    <main className="bg-background relative pt-40 pb-20 lg:pt-44">
      <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6 pb-10 lg:pb-20 overflow-hidden border-b">
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 mb-2 sm:mb-4 md:mb-6 lg:mb-8 font-black text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl">
          Run successful remote and <br className="lg:block hidden" />{" "}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Hybrid teams
          </span>
          .
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="w-full lg:col-span-3 space-y-6">
            <p className="sm:text-lg text-foreground/60 lg:w-11/12">
              DailyBot takes chat and collaboration to the next level: daily
              standups, team check-ins, surveys, kudos, best companion bot for your
              virtual watercooler, 1:1 intros, motivation tracking and more.
            </p>
            <span className="block font-semibold text-foreground/60">
              The best companion bot for your chat app.
            </span>
            <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
              {links.map((link, index) => (
                <a
                  key={index}
                  aria-label={link.ariaLabel}
                  href={link.href}
                  className="p-4 border border-input bg-background rounded-full duration-300 hover:border-card-foreground/20 hover:shadow-lg hover:shadow-lg/20"
                >
                  <div className="flex justify-center space-x-4">
                    <Image
                      className="w-6 h-6"
                      src={link.imgSrc}
                      alt={link.imgAlt}
                      loading="lazy"
                      width={128}
                      height={128}
                    />
                    <span className="hidden font-medium md:block">
                      {link.text}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="">
              🔥🌟 <span>Other integrations :</span>{" "}
              <a href="#" className="font-semibold text-foreground/40 ">
                Discord,
              </a>
              <a href="#" className="font-semibold text-foreground/40 ">
                Telegram
              </a>
            </div>

            <div className="pt-12 flex gap-6 lg:gap-12 justify-between grayscale lg:w-2/3">
              <Image
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/airbnb.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
                width={128}
                height={128}
              />
              <Image
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/ge.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
                width={128}
                height={128}
              />
              <Image
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/coty.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
                width={128}
                height={128}
              />
              <Image
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/clients/microsoft.svg"
                className="h-8 sm:h-10 w-auto lg:h-12"
                alt=""
                width={128}
                height={128}
              />
            </div>
          </div>
          <div className="w-full lg:col-span-2">
            <div className="relative w-full flex items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute left-0 scale-75 lg:scale-100 inset-0 m-auto w-full h-full lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"
              ></div>
              <Image
                src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg"
                className="relative w-full aspect-square transition duration-20000 animate-spin"
                alt="wath illustration"
                loading="lazy"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary">Deploy faster</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-foreground/80 sm:text-4xl">A better workflow</p>
                <p className="mt-6 sm:text-lg text-foreground/60 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                  iste dolor cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-foreground/60 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-foreground/80">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-primary" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              alt="Product screenshot"
              src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 border px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our app today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-foreground px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                alt="App screenshot"
                src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
                width={1824}
                height={1080}
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-foreground/5 ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>
      <BentoGrids />
    </main >
  );
}