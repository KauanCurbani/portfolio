export default class CommandService {
  clear: () => void;

  constructor(clear: () => void) {
    this.clear = clear;
  }

  public handleCommand(command: string): string | null {
    switch (command) {
      case "clear":
        this.clear();
        return null;
      case "help":
        return `- skills: list all skills availables.
                  - about: show you a little bit of my history.
                  - contact: list all contact methods.
                  - clear: clear console.
                  `;
      case "about":
        return `I started studying programming when I was 16, I've always been passionate about technology so from the beginning I knew what I wanted for my career, I currently work building mobile and web applications using mainly Flutter and Reactjs, always maintaining the quality of my work. projects.`;
      case "skills":
        return `My Skills:
                    -- Flutter: [============================--] 95%
                    -- React: [============================--] 95%
                    -- JavaScript: [============================--] 95%
                    -- Nodejs: [============================--] 95%
                    -- Figma: [==========================----] 90%
                    -- Python: [=====================---------] 70%
                    -- ThreeJs: [=====================---------] 70%
                    -- AWS: [=================-------------] 65%
                    -- TDD: [====================----------] 69%
                    `;
      case "contact":
        return `My Contacts:
        -- linkedin: linkedin.com/in/curbaniidev
        -- github: github.com/kauancurbani
        -- email: crbnii2020@gmail.com
        
        try type one contact to redirect.`;
      case "linkedin":
        window.open("https://linkedin.com/in/curbaniidev", "_blank");
        return null;
      case "github":
        window.open("https://github.com/kauancurbani", "_blank");
        return null;
      case "email":
        location.href = "mailto:crbnii2020@gmail.com";
        return null;
      default:
        return `"${command}" is not available.\n try 'help' to see another commands.`;
    }
  }
}
