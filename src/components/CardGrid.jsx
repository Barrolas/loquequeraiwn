import { Card } from "./Card"

export const CardGrid = () => {

    const image = 'https://img.freepik.com/foto-gratis/leon-melena-arcoiris-ojos-azules_1340-39421.jpg?w=740&t=st=1721876742~exp=1721877342~hmac=a586bc44fda10787bbb1189af71d7ce73086d36f22ab4f9aa3aacd425c7c1afe'

    return (

        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <Card 
                    cardImage={image}
                    cardTitle={'Tarjeta 1'}
                    cardText={'Cualquier wea que se pueda escribir en una cartita como esta'}
                />
                <Card 
                    cardImage={image}
                    cardTitle={'Tarjeta 2'}
                />
                <Card 
                    cardImage={image}
                    cardTitle={'Tarjeta 3'}      
                />
                <Card 
                    cardTitle={'Tarjeta 4'}
                />
                <Card 
                    cardTitle={'Tarjeta 5'}
                />
                <Card 
                    cardTitle={'Tarjeta 6'}
                />
            </div>
        </div>
    )
}