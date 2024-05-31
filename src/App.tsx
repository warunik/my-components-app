import React from 'react';
import Card from './components/Card'
import { FaCalendarAlt, FaUserMd, FaHospital, FaClipboardList } from 'react-icons/fa';
//import AppointmentStatus from './components/AppoinmentStatus';
import IconComponent from './components/IconComponent';
//import { FaPhone, FaHeadset, FaAmbulance, FaQrcode, FaFileAlt } from 'react-icons/fa';
import StatusTabs from './components/StatusTabs';
import CardN from './components/CardN';
import ButtonCard from './components/ButtonCard';


const App: React.FC = () => {
  return (
    <div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <Card
        title="Manage Healthcare Workers"
        icon={<FaUserMd />}
        bgColor="bg-blue-900"
        link=""
      />
      <Card
        title="Manage Medical Centers"
        icon={<FaHospital />}
        bgColor="bg-green-500"
        link=""
      />
      <Card
        title="Healthcare Booking"
        icon={<FaClipboardList />}
        bgColor="bg-orange-500"
        //image="" // need a real image!!
        link=""
      />
      <Card
        title="My Calendar"
        icon={<FaCalendarAlt />}
        bgColor="bg-purple-600"
        link=""
      />
      </div>

      {/* <div className="gap-4 px-4 py-4">
      <AppointmentStatus text="Appointment pending" color="orange" icon="pending" />
      <AppointmentStatus text="Appointment declined by the doctor" color="red" icon="declined" />
      <AppointmentStatus text="You've Confirmed this Appointment" color="green" icon="confirmed" />
      </div>

      <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-5">
        <IconComponent icon={<FaPhone />} label="24/7 Hotline" link="https://example.com/hotline" />
        <IconComponent icon={<FaHeadset />} label="Online Consultation" link="https://example.com/consultation" />
        <IconComponent icon={<FaAmbulance />} label="Home Visits" link="https://example.com/home-visits" />
        <IconComponent icon={<FaQrcode />} label={<><span>Scan QR</span><br /><span>Code</span></>} link="https://example.com/qr-code" />
        <IconComponent icon={<FaFileAlt />} label="Get Reports" link="https://example.com/reports" />
      </div>
     */}
    <div className="flex flex-wrap gap-x-2.5">
      <StatusTabs text="Appointment pending" icon="pending" />
      <StatusTabs text="Appointment declined by the doctor" icon="declined" />
      <StatusTabs text="You've Confirmed this Appointment" icon="confirmed" />
    </div>

    <div className="flex flex-wrap gap-10">
    <IconComponent icon="https://example.com/icon.png" label="24/7 Hotline" link="https://example.com"/>
    <IconComponent icon="https://example.com/icon.png" label="Online Consultation" link="https://example.com"/>
    <IconComponent icon="https://example.com/icon.png" label="Home Visits" link="https://example.com"/>
    <IconComponent icon="https://example.com/icon.png" label={<><span>Scan QR</span><br /><span>Code</span></>} link="https://example.com"/>
    <IconComponent icon="https://example.com/icon.png" label="Get Reports" link="https://example.com"/>
    </div>

    <div className='flex flex-wrap gap-10'>
    <CardN
      type="card1"
      bgColor="bg-slate-800"
      title="Manage Healthcare"
      subtitle="Workers"
      icon={<FaUserMd />}
      link="#"
    />

    <CardN
      type="card2"
      image="https://via.placeholder.com/288x192"
      title="Healthcare"
      subtitle="Booking"
      icon={<FaHospital />}
      link="#"
    />

    <CardN
      type="card3"
      image="https://via.placeholder.com/213x167"
      title="My"
      subtitle="Calendar"
      icon={<FaCalendarAlt />}
      link="#"
    />



    </div>
    <div className = "flex-wrap-gap">
    <ButtonCard
      type="card1"
      image="https://via.placeholder.com/213x167"
      title="My"
      subtitle="Calendar"
      icon={<FaCalendarAlt />}
      link="#"
    />
    <ButtonCard
      type="card2"
      image="https://via.placeholder.com/213x167"
      title="My"
      subtitle="Calendar"
      icon={<FaCalendarAlt />}
      link="#"
    />
    <ButtonCard
      type="card3"
      image="https://via.placeholder.com/213x167"
      title="My"
      subtitle="Calendar"
      icon={<FaCalendarAlt />}
      link="#"
    />

    </div>
     
    </div>
    
  );
}

export default App;
