import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Landing() {
    const location = useLocation();
    const navigate = useNavigate();

    useAuth();

    // función única para redirigir al login
    const goToLogin = () => {
        navigate("/login");
    };

    return (
        <div className="font-inter text-gray-900 bg-white">
            {/* Navbar */}
            <header className="flex justify-between items-center px-10 py-4 bg-purple-700 bg-opacity-90 text-white sticky top-0 z-50 backdrop-blur border-b border-white/10">
                <div className="text-xl font-bold">LEVIATAN</div>
                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <a href="#" className="hover:text-white">
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a href="#features" className="hover:text-white">
                                Características
                            </a>
                        </li>
                        <li>
                            <a href="#plans" className="hover:text-white">
                                Precios
                            </a>
                        </li>
                    </ul>
                </nav>
                <button
                    onClick={goToLogin}
                    className="bg-gradient-to-r from-purple-700 to-purple-400 px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition"
                >
                    start now
                </button>
            </header>

            {/* Hero */}
            <section className="flex flex-wrap justify-between items-center px-10 py-20 bg-gradient-to-r from-purple-100 to-purple-50 rounded-b-[50px] gap-10">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold text-purple-700 mb-6">
                        Your Study Assistant
                    </h1>
                    <p className="text-lg text-gray-700 mb-6">
                        Learn smarter, not harder.
                    </p>
                    <button
                        onClick={goToLogin}
                        className="bg-gradient-to-r from-purple-700 to-purple-400 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition"
                    >
                        start now
                    </button>
                </div>
                <div className="flex justify-center">
                    <img
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NEBAQDRAQEBAQERcPGBAPEBAQEA8QFREXFhYSFhUYHSggGB0lGxUVITEhMSorLjAvFx8zOTMtOCguLi0BCgoKDg0OGxAQGCslHyYtLSsyNTAtLS0tKy0tLS0tLS01LS0tKy8tLS0tKy8vKy0tKy0tLSstLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgEDBAUGB//EAD0QAAICAQMDAwICBwYEBwAAAAECAxEABBIhEzFBBSJRMmEUcQYjM0JSgZEkkqHB0fAVQ3KCBxZTYrHC8f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACIRAQEBAQACAgEFAQAAAAAAAAARAQIDITFBUQQSYYHwMv/aAAwDAQACEQMRAD8A+J4ZNYVnuEYZNYVgRhk1hWBGGTWFYEYZNYVgRhk1hWBGGTWFYEYZNYVgRhk1hWBGGTWFYEYZNYVgRhk1hWBGGTWFYEYZNYVgRhk1hWBGGTWFYEYZNYVgRhk1hWBGGTWFYD1kVllYVmmorrJrHrCsEJWFY9YVghKyKyysKwQlYVj1hWCErCsesKwQlYVj1hWCErCsesKwQlZFZZWFYIrrCssrCsEV1k1j1hWCErIrLKwrBCVkVllYVghKwrHrCsEV1hWWVhWCK6wrLKwrBCVhWPWFYISsissrCsEV1hWWVhWCHrCsesKzUUlYVj1hWIErCsesKxAlYVj1hWIErCsesKxAlYVj1hWIErCssC50fQtDDPKRqWkSFI5JWaLYZBtQ7QA3Btyq1392XcWOWqFiAoJJNAAEkn4AHfOlL+j+qQ06RqaDUdRpgwBFixvsfl4II7jOro4IoYnkkdoGsRxwRx9TUapyfcGY8IFBU0e5I48FIvU0RTpY9PASzb+rLulmE/baJgVIB7ErtFkHxZzt+kYR+i+tMTzCG0j23slhdzuNDaisWbn4GcgjuPI4ryD8Z6MQwsk8Z/EQ65ymyFpA6llb3I5Khkcj6V5N8GrGZtB64Q8Z1saa2NP3NTZajft6o94Fm6v+XjJlHFrCs06rTdMiuUYblb5Hx+Y/33GU1moErCsesKxAlYVj1hWIErCsesKxAlYVj1hWIErCsesKxAlYVj1hWIErCsesKxAlYVj1hWIErCsesKxA1YVlm3Dbm41FdYVlm3DbiEV1hWPWTtxCIjVfdu3fSdu0A++xW6/FX9+2KFvHAyKxCIkjKkqwKspKlWBDKwNEEHsQfGLWaOgxTqbTt39PfYrft3ba73XN5VtxCFC5dAdpulbginUMOQRdHzzwfBo4qrmtIkpTvskWVVTamyKJNDsAeL75rOVzFSoh8Ffy9w/oef8AE56X0fRyGIcoyTumnLxhEmj08ZDNsagQxZkq++w3fjjIi+Fv/qYn/wCKz0/pUpmRGkMcQ0EEkiqu2I6mOixQfxSBiDu+CfI5vfGz06ZwTW+gzQavptGmn0pUxRy6qSL2aV7Cz+0kqxsuWAuye1557VaI6ORVXmya1Aoq6qeTERxVD6u/Pjtn0n0z9JZHeIayGP8AE7RqZJnXaGQsWUsG9qhYxGb+G+xOdP09fTtas2zaskqyRyR9MBKMds4jccOoYUa4B+M8nfl68f8A3z6/hc8Vz1r49pGm1BO6T6Pe7yjqALffmzvvsBRY/fnNXraDVTl4oFhHTQEL+++wFpXN1vJPNccZ9A9Q/wDDRwq/gW3wqbCy2rO9ftCexauB3odvN4df+j2oDMdTGyy92FAK3H1KBwOO4H5/Nc9/U+PffOnHg3d9vHenenqxMMpLIyu4CVaSJEzKQx45K0RRsH5ojjSacjPofpPpd6mEEhRv5Zr2qtGya8Vnl9fothI71xYumryLzXHlq9+KbHniuRWaZ46yrbnpz24biusKyzbhtywiusKyzbhtxCK6wrLNuG3EIrrCsuMRHNYtYhFdYVlywk9sUrWIRXWFZZtw24hFdYVlm3DbiEV1hWWbcNuIQ9YVjVhWaaJWFY9YVgJWFY9YVgQFFGzRFUKvdzzz445yAPOPWRWAm3JrGrJJ4C8dyRwLs1fPc9hx45+TgCDNEa4mnhZzSKzkAtSKWO0dzQ8D5zqeneltKXDSQwlYy/66QLvIqowBZ3G+AQM3zMawukO26CmxXuUNV+RfY/fO96TojujnmDCDftZyL6q/S8SX9TFSR9r5rMXpfpJlZ902nSOJDK8nWjalH7oUHcWJIAFCyc0QaiTUEIlrFCrusZb2QqFLM33Y1ZPdj47DO+bk9PRxuOzHulM6xtPqykDGJ21PQmigG2zNdbowho0TXI9t0M2p9R1UWmiGmmhaR+onT04qeKJlUOBIbaQuAp4LFQPPcJ6YgmGw7lgi007nbGXeV2R6Q7eSStsPCg/ezx5Wg2OrJ1HklX3szbY2VWJ2qhFgblB5NDtdZ5+ucrl3mV1f0Y/SDV6dgBM7C/8AmEsfjm+b4o/ln07QfpgrqBqI1f8AKv8APPlHpevMzfg5IleRypSeMF51b91Vckl0IPk88URmiXXCGR0jlWVUahKgYK9eQDz/APmfL/U/p71cyO/j646ydY+xQ+l6GeNpoECblIr6QCwrt2Hntnyz9MdAkTMFrj4zd/5jl0cUaEMvWXrruBFxN7UIvv8AS/P5Z5T1z1kzkknM+LxdfueTees7t9PN6ocnMlZpma8prPp856NJWFY9YVlQtZFY9YVgLWPBGzMqopZmIUKBZZiaAA8m8KzqemRdHfO4Rti0qP1AXZgVDKV8pYfkjsO/bNc5VzKu10QeIpGGZ9NW8fhumyqw/WGVwSfZIRGL+fHbOFWdP0jUAT3KA6vasrM6q27yxXng038sp9T0nRkZAQwBIDLe1gDwwuuD3y7m7lXcuVq9BkUCcMdv6h/+UJd3A45+j/r8ZypDZvOn6JuH4jaJT/ZpL6TBaWhZe/qT5XznNIxu+sN31hKyKx6wrMMkrJrGrCsBawrGrCsB6wrHrCs0pKwrHrCsoSsKx6wrASsZa8i/685NYVkCqlkDgWQLJoCz3J8DNkweAz6YzRtHvG4wlZY5mjJ2lHrke5ubA/wGZazQipVUhZ6O5ndejTOCCKCmwUbzQA55IDcF8GjYoH3GGNgQWYOi7ewBc11L59q7ux4zUzaMRRpFHO8gLbnaZIlm5G3amxiKBIq+b+eMyTauWdY0LM4hHRjR6YJETwoB4HN3+fxmyaSEaaPZp4mkjaQtKW1FTLaXtAcCl3KPuDfGTLnyY2RepaIxqkmlmBKszSR6kMXm3FY3ZSgsKob2gi9x8m80LopJI31GnKLCu2NpIrCadrBMjKx3AlUJo3yaBPF5NZq4JRErQJC6AacyadS26RRZLoxJYksw3A37TwcfTsNISs7PLFIFMkELrtl03P7wPtYMLoqGUqO3jWb+Gs38O96bI8kyarRKY7SRYtHHIR0II4qeaZ2G0qxXsQb+4UZ5+Xo6jpw6GIGZuyMSF1DsaPRBI2/SPYe4HHPtHR/S6OSNo41fdHqkXUKYyOkYSAFjWqCqoQbvug/hs8H1PWQg9PSo8SBBG7l90kzAU5si1QnnYK+/2xn5Rq1crQxEPKSyBoY4oqVEXdU8vHAJYlRQPdubXOf6aSxZqKQxKHkkRdxRCdo5PlmIUcjk/nmg+pLqniGvkchUTTjUCNd8UKjaAyqf1igEn+L7ntmP1CZf2MDboI2NNRUztddZwebI7L+6OO9kz9t+UyjU+pPKbdiaG0AsSEUdkW+wHxmR5bxawrNZzmLdLWRWPWFZUJWFY9YVgJWFY9YVlCgfAuvjPT6zXaeOI6V1kLRj9ydJIfxFgPIu0UQVAHB8DnxnF9N1Z08iyKFJU2Nyq6391YEHLdVGAilo2WSQ71YmlMXYUtfxA834zpx6yunOzPR520N2iagDqqa6ke7o17lB2Vvvs1V9jl+uRtVBHMS7OlQMzujcAHphV4YAIoF9rHjtmDTKlSB1LEp7SGrawINkefaGFffNWi9QaFHQBTvXabUMQLBtSfpPHf8APLzmfa8z7Ho4QCUOkbVExHUYrTAcFK7v8Dsc5U1FjWdXQzsizsrRgmPbtdQxdWIB2WDRF3fB4NHOYwydfETr4xVWFY9YVnNzJWFY9YVgJWFY9YVgPtyNuWVhWWNRXtyax6wrEIr24bcsrIrECkfYf64KKINA0bo3R+xrHrCsQhW58V+XYD4yyCENYN3tJAUAliCCR/d3H+QxhCWFoHYCtx2cKxuhYv4Ndro8cZq9MUxyo7MqKDtZy3AVlKte0E/Sx4qzjRdpJ1gfVfhSwXoOA0gUuUEsZAIFgMQOa4vtxnX9E07l5WYSal9PE2pXTJ1J9PMwC7hIji4xTUR9RogcVfP02uf01j0ooZBIrL1HUt1InC/s2ugBsDKwFgk/dRo/DyMn4x45JNLJugDiUxu8hRgYiGJFjklgNp2/Joc+sZ3ETwmOEEabUxTaxzLJEUYRfh13BGjYrvS3Z+DYockjgyPRpRDHMqMI1cxb3GzaSN4RgfPL/b+uU6X0+XUgJ1A3SW160igxwjllosRtUWwAP8XHIzoaCQO6RpQjvYqFgSfmRgP3j3Px27DO3izPy7eLnN1b6t6Z+Fh0cu3f1YWJ+oIi9aQqgf7k7q7+2vJvyE8VZ9H9Z1DQlhAwbpr+GtPdHKtRbfaRTA738Z5bXvonCLRjl2sHbd/Z2c/SUItgB5sEE+VHOXfWL3zmPNbcnbm3X+mTabZ1oyokBZG4KSqDRZWHBF5lrMfLkr25NY9YVlhCVhWPWFYhCVhtx6yKyQLWFZZHGzsFRSzMaCqCzMfgAcnN8Ho8pZUf2O7BFjA6kzOxpV2DhTZA9xXHrBk0mkkmbbGjMe/A4VR3Zj2VR3JPAzpN6JqGl6CGLUMjdMGDURTL/wBtNdd/A856SCScyS+m+mzvpF0ocATcTaidnWOZTIopAWPB4FAfy89/xXUosmnlkMsTPUkUjdRHZCQPf3Fc0QRjnd34XGI6dopNkilWDbCDxX7p/wA8nRRnqxjp9U7h+rpjvo8g1znodNpBP0mgYyyM4RtC4DyX36l+QR3oBuCeO47Ei6KNmaUdIuSr6LRgb1ZhasZd30U4GywbNfBzW9z6/wB/v6WvGJ6TP1mQwyLtYq9owSNfcCWaqApW587TV4+n9A1DRTTCHqRo6wCQOEQSO1LJbVacEX29wuqz1+qmKBl1s6yokCldJASsbKkhMaT8DolSx9q8pt8efOes+oM1dauqh2JpgirDplR2IRo62mtwoc8D3eAcfu61m682YjZAFkGjXPb7jCSIrV7eRdBlYjkimr6Tx2PNUfOPIxPcmvjx/TErNQhawrHrCsQhKw241ZNYhDVhWPWFZpSVhWPWFYCVgRj1hWAlYVj1hWAxVQBzvJFlfcApsij8nzxxz37jEYlu/wDoB/Idsmskcdv93iDf6fqUj2w6otJpZKZ1gZTJHdG4y3CvarYPBrm+KWJUkf3OzR9tjN05Atjszbl3dub7+PGZNntuxZP03bVzyfjt+fOXuhjRWIAZ7AAPuAU/Uw8E3x2+m8zCNPqHpLx1XTVVIRlfUaUFZlUFuA/a7o2eB34zWUOluON4p2kQb308iSqI3F9JK5uvqNdxXa75MUqKGDbmHC+2gNnc2D5Bor/Pwct9S9ObSnZOPcwV0ZCrRujCybHnlePHN+MZu56M3cekhebo6lOkHKJBON5ZJGj2FW6Yu2NuSeDxfGcCDUxuxtpYgFZ6iWP3lVvaWXaQODzycpXUuYx7txhIoP7gEJ4Iv6aY9xz7/tm3Q6nTTyoNXcBJ2nUxqZBTAqepH3bg/Ve7nm8m32bVUUpkXZKwliLdlNPASBtaJWo/NqOGH3ojH6h6dJpyOopCvyj7WCyL8qT3zaPRZdzICrrRk3xkHciNTMqmiSLPHg8HA6mb9nMJVh2mJUbcejGSDtUHwSASPJF5M/hHHrCs0arSvC21xzQII5VlPIZT5BGVHOikrCssVSSAASTwABZJ+wzr6T0OmrWOdOOnvChOpKSQOmCoICWSB7iD9u5E3cz5HJk07ISr0hU0QTyCO4IGbZoNNHHCVE0szxmR43ZY41t2CbQvuYFQG+oHkH8rYmiRSiQKZXQ7TMeoyUNy+yggZqqiDQPm80+resSmY9WR2Me2JGVum0axAIGG3g8rYH37jjM7ajN6lrJWYrGkemRVWMrp06KyFFouxHuckg+TlHp+l2MszRs8cbq3IKRyMpDdPcfB8nihz8ZuXSanV3JDJI9DfK5dlEa9zM9n2j5Pa+x54P8Aiw0rf2Zuq6qyCSUFo49wpmjRu7n/ANQ/AAFAHJ9TBun0cix6ieKSPSR6j2TaYzqXRJH3BdtEuhI4r3V3FcnmtFo4+ns1EshKguU0+3ptZtU3uL4r3V5zlsxY2xJJ8nknGGdOeZ9tZjt6QRJqFbRzttEoKif9TNQcUSw9l/zF9qzfrXg9PkKHqyaqKSSNtjII40uhtchrcr3NGrNc855cHDNbzfnWo6kfrjR8xQQA7Hj3uryORIACbLbdwoEEKOc4zc8mye9k2SfknHOIcTMTVZGRWPWFZlklYVj1hWAlYVj1hWA1YVj1hWaikrCsesKxAlYVj1hWIErCsesKxAlZYsBK7jwl7dx7bgASPuaI/ri1hWILkpGW1cKaYke12S+SpIIXseecWt4O4gUb+30ngf3QBiYyuwDKCQrVYvhqNi/yyQLGlnnt3P5Dk/4Zt9N9TeDqqArRzqUkjddykE3Y8q33FHM0XZxVkgUdwG0A2ePN9v8AXEHHgH7G67fbG5SOnHBCzBogfhoS4DMjcERu3DWDxdHt3OYNVB0nZGR7H8Z2kr4aqHfISzx5HY//AF/n/vvnT/4v1kVNWWkKARqWRG6USjgKTzx/D270VvMzcRTF6gv1GPj270ViVZgoXq01kMfJBHfyDWaX0unAD6bVtTLvOnKSxvDzyjFQwYcdwDx3rM76TaBIFR42JUSwuRuNC1aM7ipoi1oDng1zmWRItxMbulGwJVph/wByE+fsMkzfgjoRMJ9sHV0u1n9u2OcMHPAtjGCR8jj5HbKdKI4ZY2h2yyRyA+4boCVcUUB5kX86/I981wRxRpqDKd84jUJNCai/WNtYsSPcSpYWAKN9z2u0kIgWGWF4jO5sKOG0zK9cl/qfsRR4788EXMzVzFUHqRO500yirLPpN0LKzN9Uhphts1t9qnscfUJAEhk08ru7MwYSRtcZRj01Ozd1CQTRHFjtxxv9Qh1OnaRS36uYlpElmPSZCb6LGyBW678Hb8Zg0kZj1B02n1EezUIsXUYbQpI3oWLLxRam8EFszvOfOG4s6jaaWLUzTQzTMTqOlxIYpIyWZ5gRYJK2q/fn6aOLTzqXEmsaRY2Ysw0wSGV759g7AX8gf54sutjg3pEsUzkGPq9KNY4wCP2NAEnj6/6DyeZNK0htzZoDsBwBXjz9+57nGcJGjV+oyONiFo4u3TV2O4fMjd5D+fHwBmGsesM6ZkWFrJGTWRWVUg4XkVhWUGRWNWGQJWFY+FYiErCsesKxAlYVjVhWIHrDLtmGzKtU1hl2zDZgqmsKy7ZhswVTWGXbMNmCqcMu2YbMFU4Zdsw2YKprCsu2YbMFU1ljUV3E++620fcKPuv+g/n+eNsw2YKWEoN29C1igQ20obB3djfFij85aEJ/Zvu/9rcN/dNg/wAicTZkbMiV2vTdPM8b6U6dmk1O1oz0nDxFDa12AEhBWz9j2xdHOiIyyhknjcorOu5I7FMHUc7gUoGjXwfGCbVzSbN8sjdMKq7nY7FX6QvPFeMth1oCkSRiRiQRIXZZAACKscHv3PPGTLhmx3fWZSDEda6SI8SybYiGlbde5l20qN92547HtnKlhVzqZ4mEUYDFF1DgSOD7ViShTuAwY12AHziaXU6ZSeppndaJC9cgdSvax9tkX3Fi8w6iRpW3ObNV2oKP4VA4A+2TM+istYZdsw2ZtapwrLtmGzBVOGXbMNmCqawy7ZhswVThWXbMNmCqcKy7ZhswVThWXbMNmCqawrLtmGzBV23DbhhmXOjbhtwwwUbcNuGGCjZhtwwxSjbhtwwwUbcNuGGCjbhtwwwUbcNuGGCjbhtwwwUbcNuGGCjbhtwwwUbcNuGGCjbhtwwwUbcNuGGCjbhtwwwUbcNuGGCjbhtwwwUbcNuGGCjbhtwwwV//2Q=="
                        alt="Student Assistant"
                        className="max-w-sm rounded-2xl shadow-xl hover:scale-105 transition"
                    />
                </div>
            </section>

            {/* Benefits */}
            <section id="features" className="max-w-5xl mx-auto text-center my-24">
                <h2 className="text-3xl font-bold text-purple-700 mb-10">BENEFITS</h2>
                <ul className="flex flex-wrap justify-center gap-6">
                    <li className="flex-1 min-w-[240px] bg-white shadow-md rounded-xl p-6 hover:-translate-y-2 transition">
                        <span className="block text-3xl mb-2">📑</span>
                        Organize your study
                    </li>
                    <li className="flex-1 min-w-[240px] bg-white shadow-md rounded-xl p-6 hover:-translate-y-2 transition">
                        <span className="block text-3xl mb-2">📝</span>
                        Clear summaries
                    </li>
                    <li className="flex-1 min-w-[240px] bg-white shadow-md rounded-xl p-6 hover:-translate-y-2 transition">
                        <span className="block text-3xl mb-2">📚</span>
                        Homework support
                    </li>
                </ul>
            </section>

            {/* How it works */}
            <section className="bg-purple-50 max-w-5xl mx-auto text-center py-20 px-10 rounded-3xl my-20">
                <h2 className="text-3xl font-bold text-purple-700 mb-10">
                    HOW IT WORKS
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <div className="bg-white rounded-2xl shadow-md p-6 w-72 hover:-translate-y-2 transition">
                        <span className="block text-3xl mb-4">1️⃣</span>
                        <h3 className="text-purple-700 font-semibold mb-2">Sign up</h3>
                        <p>Create your free account and personalize your profile.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-6 w-72 hover:-translate-y-2 transition">
                        <span className="block text-3xl mb-4">2️⃣</span>
                        <h3 className="text-purple-700 font-semibold mb-2">Add materials</h3>
                        <p>Upload notes, books, or topics to study efficiently.</p>
                    </div>
                    <div className="bg-white rounded-2xl shadow-md p-6 w-72 hover:-translate-y-2 transition">
                        <span className="block text-3xl mb-4">3️⃣</span>
                        <h3 className="text-purple-700 font-semibold mb-2">Get AI support</h3>
                        <p>Receive summaries, quizzes, and study plans tailored to you.</p>
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section id="plans" className="text-center py-24 px-10">
                <h2 className="text-3xl font-bold text-purple-700 mb-4">PLANS</h2>
                <p className="text-gray-600">Start learning smarter today</p>
                <div className="flex flex-wrap justify-center gap-8 mt-12">
                    <div className="bg-white rounded-2xl shadow-md p-8 w-72 hover:-translate-y-2 transition">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Free</h3>
                        <p className="mb-2">Basic features to get started</p>
                        <p className="font-bold mb-4">$0 / month</p>
                        <button
                            onClick={goToLogin}
                            className="bg-purple-400 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
                        >
                            Get Started
                        </button>
                    </div>

                    <div className="bg-white border-2 border-purple-700 scale-105 rounded-2xl shadow-lg p-8 w-72 hover:-translate-y-2 transition">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Pro</h3>
                        <p className="mb-2">Everything you need to boost your learning</p>
                        <p className="font-bold mb-4">$9.99 / month</p>
                        <button
                            onClick={goToLogin}
                            className="bg-gradient-to-r from-purple-700 to-purple-400 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            Choose Plan
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-8 w-72 hover:-translate-y-2 transition">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">Premium</h3>
                        <p className="mb-2">Unlimited access + group features</p>
                        <p className="font-bold mb-4">$19.99 / month</p>
                        <button
                            onClick={goToLogin}
                            className="bg-purple-400 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white text-center py-10 rounded-t-[40px] mt-20">
                <div className="text-lg font-bold">StudyAI</div>
                <p className="text-purple-200 mt-2">
                    © 2025 Study Assistant — All rights reserved
                </p>
            </footer>
        </div>
    );
}
