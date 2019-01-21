import * as Koa from 'koa';
import { getRepository, Repository } from 'typeorm';
import movieEntity from './movie.entity';
import * as HttpStatus from 'http-status-codes';

class MovieController {
    async all(ctx:Koa.Context) {
        // Get the movie repository from TypeORM.
        const movieRepo:Repository<movieEntity> = getRepository(movieEntity);

        // Find the requested movie.
        const movies = await movieRepo.find();

        // Respond with our movie data.
        ctx.body = {
            data: { movies },
        };
    }
    
    async getById(ctx:Koa.Context) {
         // Get the movie repository from TypeORM.
        const movieRepo:Repository<movieEntity> = getRepository(movieEntity);

        // Find the requested movie.
        const movie = await movieRepo.findOne(ctx.params.movie_id);

        // If the movie doesn't exist, then throw a 404.
        // This will be handled upstream by our custom error middleware.
        if (!movie) {
            ctx.throw(HttpStatus.NOT_FOUND);
        }

        // Respond with our movie data.
        ctx.body = {
            data: { movie },
        };
    }
}
const movie = new MovieController();
export default movie;