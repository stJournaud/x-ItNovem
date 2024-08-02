import { Controller, Get, Param } from '@nestjs/common';

@Controller('stations')
export class StationsController {
    @Get()
    getStations() {
        return [];
    }

    @Get(':uic')
    getOneStation(@Param('uic') uic: string){
        return {
            uic,
        };
    }
}

