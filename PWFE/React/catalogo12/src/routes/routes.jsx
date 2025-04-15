import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home/home'
import { List } from '../components/list/list'
import { Series } from '../pages/series/series'
import { Profile } from '../pages/profile/profile'

export function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<List />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/series" element={<Series />} />
            </Route>
        </Routes>
    )
}