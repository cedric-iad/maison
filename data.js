var APP_DATA = {
  "scenes": [
    {
      "id": "0-cuisine",
      "name": "CUISINE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.89723315533422,
          "pitch": 0.10471010590222107,
          "rotation": 0,
          "target": "1-garde-manger"
        },
        {
          "yaw": -0.6699214040357155,
          "pitch": 0.03544408482346384,
          "rotation": 0,
          "target": "21-degagement-2"
        },
        {
          "yaw": 1.0377013654045157,
          "pitch": 0.13151335582374557,
          "rotation": 0,
          "target": "25-terrasse-couverte"
        },
        {
          "yaw": -0.05797607004110539,
          "pitch": 0.17913281677082793,
          "rotation": 0,
          "target": "26-sejour"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-garde-manger",
      "name": "GARDE MANGER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": -2.076826039818503,
        "pitch": -0.22183032509763478,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39969195770784793,
          "pitch": 0.06890699558723057,
          "rotation": 0,
          "target": "0-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-terrasse",
      "name": "TERRASSE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5081018693791437,
          "pitch": 0.13248185420516911,
          "rotation": 0,
          "target": "3-chambre-terrasse"
        },
        {
          "yaw": 3.0804959234832694,
          "pitch": 0.19381741369776684,
          "rotation": 0,
          "target": "25-terrasse-couverte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-chambre-terrasse",
      "name": "CHAMBRE TERRASSE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4739738846255284,
          "pitch": 0.11124532616549132,
          "rotation": 0,
          "target": "2-terrasse"
        },
        {
          "yaw": -0.5879167142052406,
          "pitch": 0.04087064547919361,
          "rotation": 0,
          "target": "4-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-couloir",
      "name": "COULOIR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8342146817849709,
          "pitch": 0.11527972606552694,
          "rotation": 0,
          "target": "7-salle-de-bains"
        },
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "6-toilettes"
        },
        {
          "yaw": -1.2153745952200374,
          "pitch": 0.1344641618829776,
          "rotation": 0,
          "target": "5-chambre-2"
        },
        {
          "yaw": -2.6238234096268123,
          "pitch": 0.13318296952491693,
          "rotation": 0,
          "target": "3-chambre-terrasse"
        },
        {
          "yaw": 3.0551015325545468,
          "pitch": 0.1839598307487389,
          "rotation": 0,
          "target": "0-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-chambre-2",
      "name": "CHAMBRE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2111227471395765,
          "pitch": 0.1856753440542782,
          "rotation": 0,
          "target": "4-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-toilettes",
      "name": "TOILETTES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9969677832797172,
          "pitch": 0.03849533749133904,
          "rotation": 0,
          "target": "4-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-salle-de-bains",
      "name": "SALLE DE BAINS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.142556291558792,
          "pitch": 0.0018264595773516135,
          "rotation": 0,
          "target": "4-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-entre",
      "name": "ENTRÉE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7946949787008606,
          "pitch": 0.15424690384083561,
          "rotation": 0,
          "target": "10-sortie-portail"
        },
        {
          "yaw": 3.102583541091816,
          "pitch": 0.12619230941771242,
          "rotation": 0,
          "target": "26-sejour"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-escalier-terrasse",
      "name": "ESCALIER TERRASSE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9569741860163177,
          "pitch": 0.5962910338200977,
          "rotation": 0,
          "target": "13-jardin"
        },
        {
          "yaw": -2.801815852337505,
          "pitch": 0.18443193343578912,
          "rotation": 0,
          "target": "25-terrasse-couverte"
        },
        {
          "yaw": -1.113793021726746,
          "pitch": 0.25000511083424826,
          "rotation": 0,
          "target": "26-sejour"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-sortie-portail",
      "name": "SORTIE PORTAIL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.24072808200659068,
          "pitch": -0.23532875022558386,
          "rotation": 0,
          "target": "8-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-garage",
      "name": "GARAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.010129759999994548,
          "pitch": 0,
          "rotation": 0,
          "target": "12-careport"
        },
        {
          "yaw": 1.8687036511328108,
          "pitch": 0.5501241187859822,
          "rotation": 0,
          "target": "16-chaufferie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-careport",
      "name": "CAREPORT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.39215689440142043,
          "pitch": 0.01811212829023212,
          "rotation": 0,
          "target": "11-garage"
        },
        {
          "yaw": 0.13499896530138855,
          "pitch": -0.09380659560334514,
          "rotation": 0,
          "target": "8-entre"
        },
        {
          "yaw": -0.1966873851563058,
          "pitch": 0.0757509260906879,
          "rotation": 0,
          "target": "13-jardin"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-jardin",
      "name": "JARDIN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0410774288368128,
          "pitch": 0.14614596804373647,
          "rotation": 0,
          "target": "12-careport"
        },
        {
          "yaw": 1.940803554633372,
          "pitch": -0.30524925917953993,
          "rotation": 0,
          "target": "9-escalier-terrasse"
        },
        {
          "yaw": 0.810865149737019,
          "pitch": 0.1869396062438149,
          "rotation": 0,
          "target": "24-jardin-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-loggia",
      "name": "LOGGIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2386935461986148,
          "pitch": 0.17938428909252835,
          "rotation": 0,
          "target": "24-jardin-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-cuisine-bas",
      "name": "CUISINE BAS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4162516546971808,
          "pitch": 0.13532122679054837,
          "rotation": 0,
          "target": "16-chaufferie"
        },
        {
          "yaw": -3.099567972895235,
          "pitch": 0.18941505380997548,
          "rotation": 0,
          "target": "17-chambre-bas-1"
        },
        {
          "yaw": 2.51538400902389,
          "pitch": 0.1577252857055207,
          "rotation": 0,
          "target": "14-loggia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-chaufferie",
      "name": "CHAUFFERIE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.669029752115639,
          "pitch": -0.07324178517827562,
          "rotation": 0,
          "target": "11-garage"
        },
        {
          "yaw": -0.4040560403825424,
          "pitch": 0.0996277970138415,
          "rotation": 0,
          "target": "15-cuisine-bas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-chambre-bas-1",
      "name": "CHAMBRE BAS 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6997703919543987,
          "pitch": 0.23618329155725526,
          "rotation": 0,
          "target": "18-chambre-bas-2"
        },
        {
          "yaw": 0.17708556330373781,
          "pitch": 0.18129053719599675,
          "rotation": 0,
          "target": "15-cuisine-bas"
        },
        {
          "yaw": -1.3289112020418266,
          "pitch": 0.3380711122153386,
          "rotation": 0,
          "target": "20-degagement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-chambre-bas-2",
      "name": "CHAMBRE BAS 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.18417934423446347,
          "pitch": 0.24043655255498209,
          "rotation": 0,
          "target": "17-chambre-bas-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-salle-eau-1",
      "name": "SALLE EAU 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06343145644216008,
          "pitch": 0.04288191049025869,
          "rotation": 0,
          "target": "20-degagement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-degagement",
      "name": "DEGAGEMENT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3566168845043123,
          "pitch": 0.1304856823846663,
          "rotation": 0,
          "target": "19-salle-eau-1"
        },
        {
          "yaw": 2.785368632828783,
          "pitch": 0.32981921512910617,
          "rotation": 0,
          "target": "21-degagement-2"
        },
        {
          "yaw": -0.4517690219844539,
          "pitch": 0.034467360273858105,
          "rotation": 0,
          "target": "17-chambre-bas-1"
        },
        {
          "yaw": -2.919239630233914,
          "pitch": 0.0916817863050099,
          "rotation": 0,
          "target": "0-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-degagement-2",
      "name": "DEGAGEMENT 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.13122349559250424,
          "pitch": 0.0017805675790594222,
          "rotation": 0,
          "target": "0-cuisine"
        },
        {
          "yaw": 3.0266060988997925,
          "pitch": 0.17687333852675202,
          "rotation": 0,
          "target": "22-cave-1"
        },
        {
          "yaw": 0.5149699175960905,
          "pitch": 0.09025795780459411,
          "rotation": 0,
          "target": "20-degagement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-cave-1",
      "name": "CAVE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9927478069559292,
          "pitch": 0.17737873675278237,
          "rotation": 0,
          "target": "23-cave-2"
        },
        {
          "yaw": -0.8995803371156903,
          "pitch": 0.17192079799369253,
          "rotation": 0,
          "target": "21-degagement-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-cave-2",
      "name": "CAVE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7937111386329363,
          "pitch": 0.20104149232590807,
          "rotation": 0,
          "target": "22-cave-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-jardin-2",
      "name": "JARDIN 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.444878655945155,
          "pitch": 0.15102064142450367,
          "rotation": 0,
          "target": "13-jardin"
        },
        {
          "yaw": 3.049736832754303,
          "pitch": 0.12710267441748613,
          "rotation": 0,
          "target": "15-cuisine-bas"
        },
        {
          "yaw": 1.8557255216823867,
          "pitch": 0.20004698607329985,
          "rotation": 0,
          "target": "14-loggia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-terrasse-couverte",
      "name": "terrasse couverte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5254262208371046,
          "pitch": -0.011471444818795362,
          "rotation": 0,
          "target": "2-terrasse"
        },
        {
          "yaw": 1.9187861835311928,
          "pitch": 0.0817572589215736,
          "rotation": 0,
          "target": "9-escalier-terrasse"
        },
        {
          "yaw": 0.798656689382458,
          "pitch": 0.17223403499844814,
          "rotation": 0,
          "target": "0-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-sejour",
      "name": "sejour",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6734697828335499,
          "pitch": 0.1122202799808214,
          "rotation": 0,
          "target": "27-sam"
        },
        {
          "yaw": -1.046981720478433,
          "pitch": 0.1534243169548546,
          "rotation": 0,
          "target": "8-entre"
        },
        {
          "yaw": -2.5962635203281987,
          "pitch": 0.14316649041078833,
          "rotation": 0,
          "target": "0-cuisine"
        },
        {
          "yaw": 1.2941041632066508,
          "pitch": 0.18120810994833292,
          "rotation": 0,
          "target": "9-escalier-terrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-sam",
      "name": "sam",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1345988057454175,
          "pitch": 0.22771808994754572,
          "rotation": 0,
          "target": "26-sejour"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
