import estilo from './profile.module.css'

export function Profile() {
    return (
        <>
            <div className={estilo.container}>
                <div className={estilo.panel}>
                    <div className={estilo.profile}>
                        <div className={estilo.img_profile}>
                            <img src="../../../eu.jpg" alt="" />
                        </div>
                        <div className={estilo.user_profile}>
                            <div className={estilo.username}>
                                <h1>Jonathan Brasil de Sousa</h1>
                            </div>
                            <div className={estilo.userdesc}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}