import { Projects, Concert, HeroBanner, Funders } from '@/components'
import { VideoDemo } from '@/components/video-demo'

import { Layout } from '@/components/layout'

export default function IndexPage() {
  return (
    <Layout
      url={`/`}
      title={'Kinder Klimaat Concert Dag'}
      card={
        'https://raw.githubusercontent.com/OceanParcels/oceanparcels_website/main/public/virtualship-assets/virtual_ship_logo_no-text.png'
      }
      // enableBanner
    >
      <HeroBanner />
      <Concert />
      <VideoDemo />
      {/* <Projects /> TODO uncomment when projects are ready */}
      <Funders />
    </Layout>
  )
}
