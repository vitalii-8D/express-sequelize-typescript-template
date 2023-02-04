import app from './server'
import { PORT } from './config/env'

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT || 3000}`)
})
