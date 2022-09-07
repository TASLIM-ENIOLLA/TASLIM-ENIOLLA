export default function About(){
    return (
        <section className = 'py-5' id = 'projects'>
            <div className = 'container py-5'>
                <div className = 'row'>
                    <div className = 'col-12'>
                        <div className = 'mx-auto' style = {{maxWidth: '900px'}}>
                            <div className = 'row'>
                                <div className = 'col-12 mb-3'>
                                    <p><span className = 'ms theme-color fo-s-15'>03. </span><span className = 'fa-4x bold heavy'>My projects</span></p>
                                </div>
                                <div className = 'col-12 text-muted'>
                                    <PortfilioCard />
                                    <PortfilioCard />
                                    <PortfilioCard />
                                    <PortfilioCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                li{
                    list-style-type: disclosure-closed;
                }
                .image{
                    position: relative;
                }
                .image::before{
                    display: block;
                    content: "fgdshfjfhjh";
                    color: red;
                    width: 100%;
                    height: 100%;
                    border: 2px solid var(--theme-color);
                    position: absolute;
                    top: 3%;
                    left: 3%;
                }
            `}</style>
        </section>
    )
}

function PortfilioCard(){
    return (
        <div className = 'row po-rel mb-5 overflow-0'>
            <div className = 'd-lg-none'>
                <div className = 'col-12 bg-navy-lucent' style = {{zIndex: '1000000000'}}>
                    <div className = 'p-3'>
                        <div className = 'theme-color ms mb-2'>Featured project</div>
                        <div className = 'text-white h4'>Project Ma'et</div>
                        <div className = 'text-muted py-4 my-3 rounded-lg'>
                            A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                        </div>
                        <div className = 'mb-3'>
                            <span className = 'text-muted mr-4 ms mb-3'>VS Code</span>
                            <span className = 'text-muted mr-4 ms mb-3'>Sublime Text</span>
                            <span className = 'text-muted mr-4 ms mb-3'>Atom</span>
                            <span className = 'text-muted mr-4 ms mb-3'>iTerm2</span>
                            <span className = 'text-muted mr-4 ms mb-3'>Hyper</span>
                        </div>
                        <div className = 'text-white'>
                            <span className = 'bi bi-github fa-2x mr-4 mb-3'></span>
                            <span className = 'bi bi-box-arrow-up-right fa-2x mr-4 mb-3'></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className = 'd-none d-lg-block'>
                <div className = 'col-lg-8 overflow-hidden' style = {{maxHeight: '350px'}}>
                    <img src = './images/website-template.webp' className = 'd-block w-100' />
                </div>
                <div className = 'col-lg-6 po-abs text-right right-0' style = {{transform: 'translate(0, -50%)', top: '50%'}}>
                    <div className = 'theme-color ms mb-2'>Featured project</div>
                    <div className = 'text-white h4'>Project Ma'et</div>
                    <div className = 'text-muted bg-navy shadow my-3 rounded-lg p-4'>
                        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                    </div>
                    <div className = 'mb-3'>
                        <span className = 'text-muted ml-4 ms mb-3'>VS Code</span>
                        <span className = 'text-muted ml-4 ms mb-3'>Sublime Text</span>
                        <span className = 'text-muted ml-4 ms mb-3'>Atom</span>
                        <span className = 'text-muted ml-4 ms mb-3'>iTerm2</span>
                        <span className = 'text-muted ml-4 ms mb-3'>Hyper</span>
                    </div>
                    <div className = 'text-white'>
                        <span className = 'bi bi-github fa-2x ml-4 mb-3'></span>
                        <span className = 'bi bi-box-arrow-up-right fa-2x ml-4 mb-3'></span>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .bg-navy-lucent{
                    background: linear-gradient(#0d2034f7, #0d2034f7), url(./images/website-template.webp);
                    background-size: cover;
                    background-position: center;
                }
            `}</style>
        </div>
    )
}
