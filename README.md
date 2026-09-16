# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.




 <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg */}

        <div className="absolute inset-0">
          <img
            src="../../public/hero-bg.jpg"
            alt="hiro imge"
            className="w-full h-full object-cover opacity-40"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>
        {/* Green Dots */}
        <div className="absolute inset-0" overflow="hidden" pointerEvents="none">
          {[...Array(30)].map((_, i) => (
            <div
              className="absolute w-1.5 h-1.5 rounded-full opacity-60"
              style={{
                bagroundColor: "#20B2A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,

              }}
            />
          ))}
        </div>
      </section>