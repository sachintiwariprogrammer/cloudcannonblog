import Link from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default async function ArtilcePage({params}) {
    async function getData() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
       
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
       
        return res.json()
    }
  const posts = await getData()

  return (
    <>
    <Box>
      <Grid container justifyContent="center" spacing={10}>
        <Grid item xs={8}>
            <Card>
                <CardContent>
                <h1>{posts.title}</h1>
                <p>{posts.body}</p>
                </CardContent>
            </Card>
            
            <Link href="/" className='mt10'>Homepage</Link>
        </Grid>
      </Grid>
    </Box>
      
    </>
  )
}