import React, { Component } from 'react';
import Pins from './components/pins/pin.js';
import Animals from './components/animals/animals.js';
import Images from './components/images/images.js';
import './App.css';
import Carousel from 'nuka-carousel';


class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      animal: [
        {
          name: "Great White Shark",
          redlist: "Vulnerable",
          taxonomy: "Carcharodon carcharias",
          id: 0,
          coordinates: [
            [56.94525985, -152.12316489],
            [44.94028915, -129.06066275],
            [34.42365612, -125.54503775],
            [27.82020017, -90.01084092],
            [32.38049182, -76.82724717],
            [40.02809532, -70.49912217],
            [17.79113336, -61.18271592],
            [-5.25225363, -82.27646592],
            [-24.67440179, -72.43271592],
            [-46.42833737, -76.29990342],
            [39.51469726, -9.67880967],
            [32.85427754, 27.58681533],
            [16.81776318, -17.58896592],
            [-31.72122617, 114.6563219],
            [-33.79062726, 131.5313219],
            [-35.52558524, 152.2735094],
            [-45.14529804, 174.4219469],
            [28.23415963, 126.9610094],
            [39.3066136, 148.0547594],
            [18.29619204, -154.2889906]           
          ],
          nurseryCords: [
            [28.42858165, -119.21691275],
            [29.00965519, -118.00948278]
          ]
        },
        {
          name: "Tiger Shark",
          redlist: "Near Threatened",
          taxonomy: "Galeocerdo cuvier",
          id: 1,
          coordinates: [
            [31.78801489, -117.7264906],
            [26.41555224, -114.73820935],
            [14.07697895, -98.3905531],
            [6.64722102, -83.44914685],
            [-8.5983294, -80.4608656],
            [-21.65114164, -71.49995723],
            [23.77142833, 178.72465215],
            [27.51399032, 157.31016481],
            [32.97721312, 138.06211793],
            [38.12234447, 122.30544853],
            [29.06180606, 123.44802665],
            [6.70676604, 111.93435478],
            [0.39400652, 107.62771415],
            [-7.84309936, 123.18435478],
            [-18.9634665, 119.63679058],
            [30.35867914, 113.92389995],
            [-18.04102666, 146.76995722],
            [-31.70831801, 155.20683741],
            [14.54236788, 88.76152491],
            [11.45982521, 73.29277491],
            [4.8515108, 51.84746241],
            [-16.36100306, 42.70683741],
            [-30.80674121, 33.21464991],
            [24.14799605, -17.05878759],
            [7.29843813, -13.89472509],
            [-28.67011626, -46.59003759],
            [-10.89670512, -31.47285009],
            [9.03834759, -56.78535009],
            [21.54679225, -92.89134457],
            [10.759586, -78.82884457],
            [35.39951874, -73.55540707]
          ],
          nurseryCords: [
            [19.44189396, -154.29292598],
            [20.59798501, -158.51167598]
          ]
        },
        {
          name: "Bull Shark",
          redlist: "Near Threatened",
          taxonomy: "Carcharinus leucas",
          id: 2,
          coordinates: [
            [41.13538488, -66.87571957],
            [37.88152213, -71.79759457],
            [29.4086798, -79.88353207],
            [26.92960275, -92.53978207],
            [12.41264032, -80.93821957],
            [9.3056445, -65.11790707],
            [-1.55142025, -45.43040707],
            [-16.10103608, -37.69603207],
            [-1.66295293, -52.91531038],
            [-2.3574063, -54.91233227],
            [-2.87322414, -60.56248574],
            [16.21515952, -100.6552032],
            [7.79857888, -85.45012508],
            [-7.562861, -81.04726736],
            [8.31736968, -13.59202892],
            [4.95675294, -4.40745861],
            [27.75878769, -12.53734142],
            [18.83007672, 38.37698529],
            [5.4592789, 52.08792279],
            [23.74180023, 60.52542279],
            [28.78373388, 49.97854779],
            [-29.05934555, 113.96292279],
            [-16.78698392, 121.69729779],
            [-14.07616905, 129.43167279],
            [-16.45010674, 139.27542279],
            [-23.70822108, 152.63479779]
          ],
          nurseryCords: [
            [29.70098755, -80.69896918],
            [28.16263138, -79.82006293]
          ]
        },
        {
          name: "Blacktip Reef Shark",
          redlist: "Near Threatened",
          taxonomy: "Carcharinus melanopterus",
          id: 3,
          coordinates: [
            [36.03913315, -153.70447421],
            [26.75422526, -157.92322421],
            [20.14752758, -155.11072421],
            [20.14752758, -156.86853671],
            [19.48604523, -174.44666171],
            [19.48604523, -166.53650546],
            [26.124648, 154.44005704],
            [31.36187514, 144.42052579],
            [33.87842536, 124.90880704],
            [28.31287426, 122.79943204],
            [21.29836307, 118.05333829],
            [18.15501908, 106.97911954],
            [13.59129827, 97.66271329],
            [19.98241559, 91.15880704],
            [18.4887587, 85.88536954],
            [15.29349102, 80.96349454],
            [11.36025521, 81.13927579],
            [5.10055339, 99.59630704],
            [-4.20532183, 108.38536954],
            [-26.42258884, 34.38146329],
            [-8.9189565, 41.23693204],
            [1.76717959, 49.49865079]
          ],
          nurseryCords: [
            [19.32024765, -155.90173983],
            [21.29836307, -158.18689608]
          ]
        },
        {
          name: "Lemon Shark",
          redlist: "Near Threatened",
          taxonomy: "Negaprion brevirostris",
          id: 4,
          coordinates: [
            [31.34786133, -117.23046837],
            [26.58247919, -110.90234337],
            [22.58748194, -110.72656212],
            [16.29255968, -102.11328087],
            [12.0327062, -88.22656212],
            [8.22654373, -84.18359337],
            [3.70810128, -78.45931909],
            [-3.31870019, -81.62338159],
            [26.762832, -95.51010034],
            [19.32934353, -92.69760034],
            [16.82300289, -86.54525659],
            [12.40176529, -74.06478784],
            [8.94753917, -60.52963159],
            [6.50914568, -53.67416284],
            [0.0192863, -47.69760034],
            [-3.31870019, -37.85385034],
            [-14.41600195, -34.86556909],
            [-19.56782971, -38.38119409],
            [25.39587757, -79.16244409],
            [31.63115177, -78.63510034],
            [37.13950429, -74.41635034],
            [17.73253716, -17.19552594],
            [9.19382251, -14.73458844],
            [1.85039822, -3.48458844],
            [0.44446551, 8.11697406],
            [-8.31524822, 11.80838031]
          ],
          nurseryCords: [
            [30.38231078, -80.37786118],
            [28.54588251, -83.36614243]
          ]
        },
        {
          name: "Shortfin Mako Shark",
          redlist: "Endangered",
          taxonomy: "Isurus oxyrinchus",
          id: 5,
          coordinates: [
            [40.64182004, -173.35947673],
            [36.91601156, -162.10947673],
            [34.05395192, -150.15635173],
            [30.48789517, -139.60947673],
            [26.78623999, -125.54697673],
            [25.52402242, -117.81260173],
            [26.78623999, -91.79697673],
            [32.28845143, -73.16416423],
            [37.75457743, -63.32041423],
            [34.69232316, -55.23447673],
            [32.05037903, -44.33603923],
            [24.63245657, -33.08603923],
            [21.39724796, -23.24228923],
            [6.4303996, -14.10166423],
            [4.68091346, 53.46199109],
            [16.0726498, 71.39167859],
            [12.32435228, 94.24324109],
            [7.4773138, 112.17292859],
            [22.29744399, 125.44748141],
            [30.77791067, 141.26779391],
            [37.46457941, 160.95529391],
            [38.57240172, 173.96310641]
          ],
          nurseryCords: [
            [28.94875673, -78.45876859],
            [26.77328558, -78.45876859],
            [31.67976143, -78.10720609]
          ]
        },
        {
          name: "Pelagic Thresher",
          redlist: "Vulnerable",
          taxonomy: "Alopias pelagicus",
          id: 6,
          coordinates: [
            [32.27618365, -121.70095609],
            [32.27618365, -142.79470609],
            [32.57293632, -168.45876859],
            [32.27618365, 169.39279391],
            [32.57293632, 144.43185641],
            [-10.80286224, 132.83029391],
            [-14.91483661, 152.16623141],
            [-11.49271601, -179.00564359],
            [-8.02854, -146.31033109],
            [-4.88495152, -113.26345609],
            [-6.63382147, -85.13845609],
            [-19.61339395, 104.0716895],
            [-12.52430827, 62.235752],
            [2.09179954, -97.373623],
            [13.90679542, -136.045498],
            [27.0438871, 146.2591895],
            [14.27341054, 145.03949432]
          ],
          nurseryCords: [
            ["data insuffecient"]
          ]
        },
        {
          name: "Great Hammerhead Shark",
          redlist: "Endangered",
          taxonomy: "Sphyrma mokarran",
          id: 7,
          coordinates: [
            [41.13538488, -66.87571957],
            [37.88152213, -71.79759457],
            [29.4086798, -79.88353207],
            [26.92960275, -92.53978207],
            [12.41264032, -80.93821957],
            [9.3056445, -65.11790707],
            [-1.55142025, -45.43040707],
            [-16.10103608, -37.69603207],
            [-1.66295293, -52.91531038],
            [-2.3574063, -54.91233227],
            [-2.87322414, -60.56248574],
            [16.21515952, -100.6552032],
            [7.79857888, -85.45012508],
            [-7.562861, -81.04726736],
            [8.31736968, -13.59202892],
            [4.95675294, -4.40745861],
            [27.75878769, -12.53734142],
            [18.83007672, 38.37698529],
            [5.4592789, 52.08792279],
            [23.74180023, 60.52542279],
            [28.78373388, 49.97854779],
            [-29.05934555, 113.96292279],
            [-16.78698392, 121.69729779],
            [-14.07616905, 129.43167279],
            [-16.45010674, 139.27542279],
            [-23.70822108, 152.63479779]
          ],
          nurseryCords: [
            [46.3230173, -126.36675568],
            [48.69710891, -129.53081818],
            [19.65136006, -154.49175568],
            [18.94627483, -155.32671662],
            [19.9407979, -156.16167756]
          ]
        },
        {
          name: "Whale Shark",
          redlist: "Endangered",
          taxonomy: "Rhincodon typus",
          id: 8,
          coordinates: [
            [40.64182004, -173.35947673],
            [36.91601156, -162.10947673],
            [34.05395192, -150.15635173],
            [30.48789517, -139.60947673],
            [26.78623999, -125.54697673],
            [25.52402242, -117.81260173],
            [26.78623999, -91.79697673],
            [32.28845143, -73.16416423],
            [37.75457743, -63.32041423],
            [34.69232316, -55.23447673],
            [32.05037903, -44.33603923],
            [24.63245657, -33.08603923],
            [21.39724796, -23.24228923],
            [6.4303996, -14.10166423],
            [4.68091346, 53.46199109],
            [16.0726498, 71.39167859],
            [12.32435228, 94.24324109],
            [7.4773138, 112.17292859],
            [22.29744399, 125.44748141],
            [30.77791067, 141.26779391],
            [37.46457941, 160.95529391],
            [38.57240172, 173.96310641]
          ],
          nurseryCords: [
            [10.72809401, 127.25226219],
            [5.9466457, 126.98859031]
          ]
        },
        {
          name: "Basking Shark",
          redlist: "Vulnerable",
          taxonomy: "Cetorhinus maximus",
          id: 9,
          coordinates: [
            [60.98998805, -55.60501703],
            [51.6941311, -41.54251703],
            [57.01183478, -26.07376703],
            [48.07196812, -16.23001703],
            [36.69632672, 159.55123297],
            [46.64315758, -130.13626703],
            [52.98283134, -149.82376703],
            [40.54025026, -160.99564233],
            [53.82119827, -174.98001763],
            [-31.24880465, -74.43314263],
            [-40.35351416, -114.51126763],
            [-28.81418724, -146.85501763],
            [-38.17630411, -167.94876763],
            [-30.64578079, 56.34810737],
            [-15.84333429, 82.36373237],
            [37.06247561, 76.73873237],
            [-49.30243562, 61.26998237],
            [-58.0129429, 27.51998237]
          ],
          nurseryCords: [
            ["data insuffecient"]
          ]
        }
      ]
    }
  }

  
  render() {
    
    let images = this.state.animal.map((e, i) => <Images animal={e} key={i} />);
    return (
      <div className="body">
      <div className="bg">
      <div id="pinId"></div>
      <div id="animalId"></div>
        <br />
        <div className="animalContainer">
        </div>
        <Carousel slidesToShow='3'>
          {images}
        </Carousel>
      </div>
      </div>
    );
  }
}

export default App;