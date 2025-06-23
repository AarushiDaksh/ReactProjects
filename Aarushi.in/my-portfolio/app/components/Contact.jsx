export default function Contact() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <a href="/resume.pdf" className="btn-primary" download>
        Download Resume
      </a>
      <a href="mailto:aarushidaksh05@gmail.com" className="btn-secondary">
        Contact Me
      </a>
    </div>
  );
}
