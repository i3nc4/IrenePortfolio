/**
 * PROJECTS DATA
 * ---------------------------------------------------------------
 * Images live in src/assets/images. To use your own screenshot,
 * replace the file (or update the import path) below.
 * Project cards show a role and a list of focus areas.
 */
import campusCompassImg from '../assets/images/campuscompass.jpg'

export const projects = [
  {
    id: 'campus-compass',
    title: 'Campus Compass',
    subtitle: 'Campus Navigation System',
    year: 'Capstone Project',
    status: 'Academic Project',
    role: 'Student Developer / Capstone Project Member',
    description:
      'Campus Compass is an academic project designed to help students and visitors navigate the university campus more conveniently. It aims to provide a visual guide to campus buildings and locations, making it easier for users to find their destinations.',
    image: campusCompassImg,
    imageAlt: 'Campus map illustration with highlighted buildings and a navigation route',
    focus: [
      'Campus navigation',
      'Visual 3D building representation',
      'User-friendly navigation experience',
      'Digital campus mapping',
    ],
    featured: true,
  },
]
