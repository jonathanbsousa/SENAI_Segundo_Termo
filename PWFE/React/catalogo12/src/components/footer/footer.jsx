import './footer.css'

export default function Footer() {
    // 😥🔫
    return (
        <footer className='container_footer'>
            <div className="mine_bar">

            </div>
            <div className="main_footer">
                <div className="footer_text">
                    <div className="footer_desc">
                        <h4>Jonathan Brasil de Sousa</h4>
                        <p>Projeto desenvolvido em React para aula de Font-End do segundo termo do SENAI Roberto Mange</p>
                    </div>
                    <div className="footer_lorem">
                        <h4>Lorem ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere turpis lacus, in molestie erat pretium eget.
                            Mauris hendrerit accumsan viverra. Phasellus eu facilisis sem, ac aliquam erat. Mauris molestie interdum placerat.
                            Curabitur felis justo, feugiat quis rutrum euismod, consectetur vitae nulla. Curabitur posuere augue purus, vel condimentum lorem rhoncus ut.
                            Curabitur auctor convallis quam, eget hendrerit neque rutrum sed.</p>
                    </div>
                </div>
                <div className="footer_cc">
                    <p>Direitos Resevados - Vozes da minha cabeça</p>
                </div>
            </div>
        </footer>
    )
}