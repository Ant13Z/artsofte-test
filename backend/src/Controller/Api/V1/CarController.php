<?php

namespace App\Controller\Api\V1;

use Symfony\Component\HttpFoundation\Response;

class CarController
{
    public function getList(): Response
    {
        return new Response('312');
    }
}