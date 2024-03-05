import LandingHeadPage from '../components/IndexComponents/LandingHeadPage.jsx'
import PresentWork from '../components/IndexComponents/PresentWork.jsx'
import Participateur from '../components/IndexComponents/Participateur.jsx'
import AdminPresent from '../components/IndexComponents/AdminPresent.jsx'
import LoppText from '../components/IndexComponents/LoppText.jsx'
import LetsConnect from '../components/IndexComponents/LetsConnect.jsx'


function Index() {
  return (
    <div>
      <LandingHeadPage />
      <Participateur />
      <PresentWork />
      <AdminPresent />
      <LoppText />
      <LetsConnect />
    </div>
  )
}

export default Index
