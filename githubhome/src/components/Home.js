import React from 'react'
import Navbar from './Navbar'
import Repolist from './Repolist'
import Footer from './Footer'


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='mid'>
                <div className='repos'>
                    <Repolist />
                </div>
                <div className='middle-boc'>
                    <h2 >Home</h2>
                    <div className='container'>
                        <h3>Updates to your homepage feed</h3>
                        <p>We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. ✨</p>

                    </div>
                    <div className='container'>
                        <h3>ℹ️ Important Notice ℹ️</h3>
                        <p>If you're upgrading from an older version and using Postgres as the meta-database, please be aware that the initial upgrade may take a little longer. This delay is due to the…</p>

                    </div>

                    <div className='last-middle'>
                        More
                    </div>

                    <Footer />

                </div>
                
                <div className='home-rights'>
                    <p><h3>Latest changes</h3>
                        <br></br>
                        Actions – Secure deployment rollouts to protected environments based on select tag patterns
                        <br></br>
                        <br></br>
                        GitHub Actions: NODE_OPTIONS is now restricted from GITHUB_ENV
                        <br></br>
                        <br></br>
                        Repository Rules – insight enhancements
                        <br></br>
                        <br></br>
                        MaxMind is now a GitHub secret scanning partner
                        View changelog →</p>
                    <br></br>
                    <br></br>
                    <hr></hr>


                    <p><h3>Explore repositories</h3>
                        @pola-rs profile pola-rs / polars
                        Fast multi-threaded, hybrid-out-of-core query engine focussing on DataFrame front-ends

                        <br></br>
                        <br></br>
                        @aquasecurity profile aquasecurity / trivy
                        Find vulnerabilities, misconfigurations, secrets, SBOM in containers, Kubernetes, code repositories, clouds and more

                        <br></br>
                        <br></br>
                        @rust-lang profile rust-lang / rustlings
                        🦀 Small exercises to get you used to reading and writing Rust code!

                        <br></br>
                        <br></br>
                        <a >Explore more →</a></p>

                </div>


            </div>

        </div>
    )
}

export default Home