/**
 * SKILLS DATA
 * ---------------------------------------------------------------
 * Add, remove or reorder skills freely. Each skill needs:
 *   name – display name
 *   icon – brand icon from react-icons
 */
import {
  SiJavascript,
  SiPhp,
  SiHtml5,
  SiCss,
  SiMysql,
  SiPython,
  SiSharp,
} from 'react-icons/si'
import { FaMicrosoft, FaScrewdriverWrench, FaJava } from 'react-icons/fa6'

export const skills = [
  { name: 'C#', icon: SiSharp },
  { name: 'Python', icon: SiPython },
  { name: 'Java', icon: FaJava },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss },
  { name: 'PHP', icon: SiPhp },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Microsoft Office', icon: FaMicrosoft },
  { name: 'Computer Troubleshooting', icon: FaScrewdriverWrench },
]
