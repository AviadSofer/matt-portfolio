interface testimonial {
  key: number;
  profileSrc: string;
  alt: string;
  testimonial: string;
  name: string;
  jobTitle: string;
}

const testimonials: testimonial[] = [
  {
    key: 1,
    profileSrc: 'https://mattfarley.ca/img/avatars/alvin.png',
    alt: 'alvin',
    testimonial: `“Matt's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.”`,
    name: 'Alvin Engler',
    jobTitle: 'CEO, West Third Enterprises, Inc.',
  },
  {
    key: 2,
    profileSrc: 'https://mattfarley.ca/img/avatars/pascal.png',
    alt: 'pascal',
    testimonial: `“Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.”`,
    name: 'Pascal Tremblay',
    jobTitle: 'Creative Lead, Good Kind',
  },
];

export default testimonials;
