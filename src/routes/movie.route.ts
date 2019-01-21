import * as Router from 'koa-router';
import * as Koa from 'koa';

import MovieController from '../controller/movie.controller';

const routerOpts: Router.IRouterOptions = {
  prefix: '/movies',
};

const router: Router = new Router(routerOpts);

async function movieValidate(ctx: Koa.Context) {
  if(false){
    ctx.throw(400,'Invalid Request Authorize');
  }
  //TODO Validate Api-Token
}

router.use(async (ctx, next) => {
  await movieValidate(ctx);
  await next();
});

router.get('/', MovieController.all);

router.get('/:movie_id', MovieController.getById);

// router.post('/', async (ctx:Koa.Context) => {
//   // Get the movie repository from TypeORM.
//   const movieRepo:Repository<movieEntity> = getRepository(movieEntity);

//   // Create our new movie.
//   let data = {
//     "name": ctx.request.body.name,
//     "releaseYear": ctx.request.body.releaseYear,
//     "rating": ctx.request.body.rating
//   };
//   const movie: movieEntity = movieRepo.create(data);

//   // Persist it to the database.
//   await movieRepo.save(movie);

//   // Set the status to 201.

//   // Respond with our movie data.ctx.status = HttpStatus.CREATED;
//   ctx.body = {
//     data: { movie },
//   };
// });

// router.delete('/:movie_id', async (ctx:Koa.Context) => {
//   // Get the movie repository from TypeORM.
//   const movieRepo:Repository<movieEntity> = getRepository(movieEntity);

//   // Find the requested movie.
//   const movie = await movieRepo.findOne(ctx.params.movie_id);

//   // If the movie doesn't exist, then throw a 404.
//   // This will be handled upstream by our custom error middleware.
//   if (!movie) {
//     ctx.throw(HttpStatus.NOT_FOUND);
//   }

//   // Delete our movie.
//   await movieRepo.delete(movie);

//   // Respond with no data, but make sure we have a 204 response code.
//   ctx.status = HttpStatus.NO_CONTENT;
// });

// router.patch('/:movie_id', async (ctx:Koa.Context) => {
//   // Get the movie repository from TypeORM.
//   const movieRepo:Repository<movieEntity> = getRepository(movieEntity);

//   // Find the requested movie.
//   const movie:movieEntity = await movieRepo.findOne(ctx.params.movie_id);

//   // If the movie doesn't exist, then throw a 404.
//   // This will be handled upstream by our custom error middleware.
//   if (!movie) {
//     ctx.throw(HttpStatus.NOT_FOUND);
//   }

//   // Merge the existing movie with the new data.
//   // This allows for really simple partial (PATCH).
//   const updatedMovie = await movieRepo.merge(movie, ctx.request.body);

//   // Save the new data.
//   movieRepo.save(updatedMovie);


//   // Respond with our movie data.// Response with the updated content.
//   ctx.body = {
//     data: { movie: updatedMovie },
//   };
// });

export default router;