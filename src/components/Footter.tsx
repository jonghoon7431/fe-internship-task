import { Github, Mail, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-primary-light text-gray-300 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">이종훈</h3>
            <p className="text-gray-400">웹 개발자 | Frontend Engineer</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <div className="hover:text-white transition-colors">
                  010-2246-9211
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:jonghoon2246@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  jonghoon2246@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Github className="w-5 h-5" />
                <a
                  href="https://github.com/jonghoon7431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  github.com/jonghoon7431
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} 홍길동. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
