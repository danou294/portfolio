export default function Contact() {
    return (
      <section id="contact" className="bg-[#0F0F23] text-[#E2E8F0] border-t border-[#3730A3]">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">On travaille ensemble ?</h2>
          <p className="mt-3 text-[#E2E8F0]">CDI ou mission freelance long terme · Paris / Remote</p>
  
          <div className="mt-8 flex justify-center gap-4">
            <a href="mailto:danielevy29@gmail.com" className="rounded-lg bg-[#8B5CF6] px-5 py-3 font-medium hover:bg-[#7C3AED] transition">📧 Me contacter</a>
            <a href="https://www.linkedin.com/in/daniellevy2904/" target="_blank" rel="noreferrer" className="rounded-lg border border-[#8B5CF6] px-5 py-3 font-medium text-[#8B5CF6] hover:bg-[#8B5CF6] hover:text-white transition">
              🔗 LinkedIn
            </a>
            <a href="https://github.com/danou294" target="_blank" rel="noreferrer" className="rounded-lg border border-[#3730A3] px-5 py-3 font-medium text-[#E2E8F0] hover:bg-[#1E1B4B] hover:border-[#8B5CF6] transition">
              💻 GitHub
            </a>
          </div>
        </div>
      </section>
    );
  }
  