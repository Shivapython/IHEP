import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Anil Kumar',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kumar focuses on preventive care, early diagnosis, and effective treatments.',
        fees: 500,
        address: {
            line1: '17th Cross, Labbipet',
            line2: 'Vijayawada, Andhra Pradesh'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Sunita Sharma',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Sharma is dedicated to women’s health and preventive gynecological care.',
        fees: 1200,
        address: {
            line1: '27th Road, Benz Circle',
            line2: 'Vijayawada, Andhra Pradesh'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Rajesh Patel',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Patel provides specialized care for skin health and dermatological treatments.',
        fees: 900,
        address: {
            line1: '37th Street, Suryaraopet',
            line2: 'Vijayawada, Andhra Pradesh'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Suresh Reddy ',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Nair specializes in child healthcare, focusing on preventive care.',
        fees: 700,
        address: {
            line1: '47th Lane, MG Road',
            line2: 'Vijayawada, Andhra Pradesh'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Priya Nair',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Reddy is experienced in treating neurological disorders and complications.',
        fees: 2400,
        address: {
            line1: '57th Avenue, Eluru Road',
            line2: 'Vijayawada, Andhra Pradesh'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Manoj Desai',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gupta provides expert care in neurology and cognitive health.',
        fees: 2000,
        address: {
            line1: '67th Street, Patamata',
            line2: 'Vijayawada, Andhra Pradesh'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Vandana Gupta',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Desai is committed to providing comprehensive general healthcare.',
        fees: 400,
        address: {
            line1: '77th Cross, Auto Nagar',
            line2: 'Vijayawada, Andhra Pradesh'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Yash Aggarwal',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Rao specializes in gynecological treatments and women’s wellness.',
        fees: 1400,
        address: {
            line1: '87th Cross, Ayodhya Nagar',
            line2: 'Vijayawada, Andhra Pradesh'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Kavitha Rao',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Year',
        about: 'Dr. Aggarwal offers skincare solutions and dermatology treatments.',
        fees: 800,
        address: {
            line1: '97th Lane, Satyanarayanapuram',
            line2: 'Vijayawada, Andhra Pradesh'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Arjun Mehta',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Mehta is committed to children’s healthcare and wellness.',
        fees: 1100,
        address: {
            line1: '107th Avenue, Bhavanipuram',
            line2: 'Vijayawada, Andhra Pradesh'
        }
    }
];
