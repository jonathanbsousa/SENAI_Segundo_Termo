import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { List } from '../components/list/list'
import { Series } from '../pages/series/series'
import { Profile } from '../pages/profile/profile'
<<<<<<< HEAD
import { ListSeries } from '../components/list/listseries'
=======
import { ListSeries } from '../components/list/list_series'
>>>>>>> 1d95b4026a2b08004cdb154ae505733852615911

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<List />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/series" element={<Series />} >
<<<<<<< HEAD
                <Route index element={<ListSeries />} />
=======
                <Route index element={<ListSeries />}/>
>>>>>>> 1d95b4026a2b08004cdb154ae505733852615911
                </Route>
            </Route>
        </Routes>
    )
}