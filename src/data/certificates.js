/**
 * CERTIFICATES DATA
 * ---------------------------------------------------------------
 * Images live in src/assets/certificates. Each object below maps to one
 * certificate card and its lightbox preview.
 *
 * {
 *   id: 'unique-id',
 *   title: 'Certificate title',
 *   organization: 'Issuing organization',
 *   date: 'Month Year',
 *   credentialId: 'OPTIONAL-ID',
 *   description: 'Short description of what was covered.',
 *   image: importedImage,
 *   imageAlt: 'Alt text for the certificate image',
 *   credentialUrl: '', // optional verification link
 * }
 */
import foundationalCSharpImg from '../assets/certificates/Cert-Oct11,2025.jpeg'
import paceLevelUp43Img from '../assets/certificates/Cert-May27,2024.png'
import siesRecognitionImg from '../assets/certificates/Cert-Dec9,2023.png'
import paceLevelUp41Img from '../assets/certificates/Cert-Dec6,2023.png'
import paceLevelUp40Img from '../assets/certificates/Cert-Oct12,2023.png'

export const certificates = [
  {
    id: 'foundational-csharp-microsoft',
    title: 'Foundational C# with Microsoft',
    organization: 'freeCodeCamp × Microsoft',
    date: 'October 11, 2025',
    credentialId: 'irene04',
    description:
      'Developer certification awarded after completing the Foundational C# with Microsoft course, covering C# syntax, data types, logic, and core programming fundamentals.',
    image: foundationalCSharpImg,
    imageAlt:
      'freeCodeCamp and Microsoft certificate of completion for Foundational C# with Microsoft awarded to Irene C. Concepcion',
    credentialUrl:
      'https://www.freecodecamp.org/certification/irene04/foundational-c-sharp-with-microsoft',
  },
  {
    id: 'jpssite-pace-level-up-4-3',
    title: 'JPSSITE Pace Level Up v. 4.3',
    organization: 'La Consolacion University Philippines — CITE',
    date: 'May 27, 2024',
    credentialId: 'N/A',
    description:
      'Certificate of attendance for the seminar with the theme "Coding for Impact: Leveraging Technology to Solve Real-World Challenge."',
    image: paceLevelUp43Img,
    imageAlt:
      'Certificate of attendance for JPSSITE Pace Level Up v. 4.3 awarded to Irene C. Concepcion',
    credentialUrl: '',
  },
  {
    id: 'sies-lcup-organizational-day',
    title: 'SIES-LCUP Organizational Day',
    organization: 'Society of Industrial Engineering Students (SIES-LCUP)',
    date: 'December 9, 2023',
    credentialId: 'N/A',
    description:
      'Certificate of recognition for attending the SIES-LCUP Organizational Day with the theme "Paragon: Exploring the World of Innovation."',
    image: siesRecognitionImg,
    imageAlt:
      'Certificate of recognition from SIES-LCUP for the Organizational Day awarded to Irene C. Concepcion',
    credentialUrl: '',
  },
  {
    id: 'jpssite-pace-level-up-4-1',
    title: 'JPSSITE Pace Level Up v. 4.1',
    organization: 'La Consolacion University Philippines — CITE',
    date: 'December 6, 2023',
    credentialId: 'N/A',
    description:
      'Certificate of attendance for the seminar with the theme "From Pixels to Perfection: Unleashing Creativity in Game Development and Graphic Designing."',
    image: paceLevelUp41Img,
    imageAlt:
      'Certificate of attendance for JPSSITE Pace Level Up v. 4.1 awarded to Irene C. Concepcion',
    credentialUrl: '',
  },
  {
    id: 'jpssite-pace-level-up-4-0',
    title: 'JPSSITE Pace Level Up v. 4.0',
    organization: 'La Consolacion University Philippines — CITE',
    date: 'October 12, 2023',
    credentialId: 'N/A',
    description:
      'Certificate of attendance for the seminar "IT Trends: Navigating the Ever-Changing Digital Landscape."',
    image: paceLevelUp40Img,
    imageAlt:
      'Certificate of attendance for JPSSITE Pace Level Up v. 4.0 awarded to Irene Concepción',
    credentialUrl: '',
  },
]
