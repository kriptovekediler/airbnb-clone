'use client'

import Container from "../components/Container"
import Heading from "../components/Heading"
import { SafeListings, SafeUser } from "../types"

interface FavoritesClientProps {
    listings: SafeListings[]
    currentUser: SafeUser | null
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
    listings, currentUser
}) => {
  return (
    <Container>
      <Heading
      title="Favorites"
      subtitle="List of places you have favorited!"
      />
    </Container>
  )
}

export default FavoritesClient