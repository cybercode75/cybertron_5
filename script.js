/* * ==========================================================================
 * SUB-SECTION: KNOWLEDGE ENGINE 
 * Expanded protocol datasets for various agricultural modules.
 * ==========================================================================
 */

const KNOWLEDGE_BASE = {
    'rain': {
        dos: [
            'Immediately cover all seedling nurseries with UV-treated poly-tunnels.',
            'Clean and verify all primary drainage trenches of sediment build-up.',
            'Elevate all harvested produce crates to a minimum of 30cm off the floor.',
            'Apply protective anti-rust wax to exposed metallic hydraulic joints.',
            'Synchronize LoRa moisture sensors for real-time saturation logging.',
            'Seal all watertight inventory bunkers and verify gasket integrity.',
            'Deploy temporary silt fences at high-velocity runoff slopes.',
            'Switch off all automated solar irrigation controllers immediately.',
            'Active industrial fans in storage zones to lower localized humidity.',
            'Relocate fuel and chemical drums to zones above the 100-year flood line.',
            'Monitor weather radar for secondary cell formation.',
            'Ensure all greenhouse vents are sealed to prevent wind lift.',
            'Check backup generator fuel levels in case of grid failure.',
            'Create water diversion channels away from compost piles.',
            'Reinforce staking for tall crops like maize and tomato.',
            'Document pre-storm crop conditions for insurance claims.',
            'Move livestock to high ground or covered shelters.',
            'Secure loose equipment that could become projectiles.',
            'Clear roof gutters of debris to prevent overflow.',
            'Apply copper-based fungicides proactively if safe window exists.',
            'Double-check turbidity levels in reservoir intake pipes.',
            'Alert all field staff to evacuate low-lying sectors.',
            'Disconnect sensitive electronics from mains to avoid surge.',
            'Prepare sandbags for critical infrastructure entry points.',
            'Verify functionality of sump pumps in basements.'
        ],
        donts: [
            'Do not sow small-grain seeds during active storm cells.',
            'Never apply liquid fertilizers (high risk of nutrient leaching).',
            'Do not leave harvest bins in fields past 16:00 during rain events.',
            'Avoid operating heavy machinery on saturated clay horizons (compaction).',
            'Never ignore localized barometric pressure alerts from command.',
            'Do not schedule pesticide applications within 12 hours of rain.',
            'Prohibit staff from walking through wet crop rows (root crush risk).',
            'Do not store dry biomass (straw/hay) near unsealed roof vents.',
            'Never leave electrical nodes or battery banks unsealed in the field.',
            'Do not allow stagnant water pools to persist for more than 4 hours.',
            'Avoid harvesting root vegetables in muddy conditions.',
            'Do not open cold storage doors if humidity outside is >90%.',
            'Never use electric pumps while standing in water.',
            'Do not ignore signs of embankment erosion.',
            'Avoid touching wet electric fences.',
            'Do not drive trucks on unpaved farm roads.',
            'Never apply herbicides; they will wash away.',
            'Do not perform pruning; open wounds invite bacteria.',
            'Avoid transplanting; roots will suffocate.',
            'Do not leave livestock in flood-prone paddocks.',
            'Never ignore severe weather warnings on the radio.',
            'Do not attempt to cross flooded causeways.',
            'Avoid using nitrates that easily runoff into streams.',
            'Do not leave greenhouse doors propped open.',
            'Never assume the storm is over until the alert clears.'
        ]
    },
    'heat': {
        dos: [
            'Perform deep-root irrigation strictly between 03:00 and 05:00.',
            'Deploy 40% density shade screens across all leafy green production zones.',
            'Apply a minimum 4-inch layer of organic cedar mulch to all beds.',
            'Manually log leaf temperature using IR thermometers every 2 hours.',
            'Establish hydration/electrolyte stations for all field technicians.',
            'Open all greenhouse ridge vents and activate side-wall exhaust fans.',
            'Initiate high-pressure misting systems in livestock cooling zones.',
            'Monitor leaf turgor pressure for early signs of vascular wilting.',
            'Transition high-exertion manual labor to evening shifts (after 19:00).',
            'Verify all backup water pumps are fueled and ready for continuous run.',
            'Increase potassium intake in fertigation to regulate stomata.',
            'Paint greenhouse roofs with shading compound (white-wash).',
            'Use evaporative cooling pads in controlled environments.',
            'Monitor soil moisture sensors at multiple depths.',
            'Provide extra water troughs for all livestock.',
            'Dampen roadways to reduce dust coating on leaves.',
            'Harvest sensitive fruits before sunrise.',
            'Check electrical panels for overheating components.',
            'Ensure cold chain vehicles are pre-cooled.',
            'Use anti-transpirant sprays on high-value ornamentals.',
            'Increase air circulation around stored produce.',
            'Schedule shorter irrigation bursts to prevent runoff.',
            'Monitor UV index levels for worker safety.',
            'Rotate staff out of direct sun every 45 minutes.',
            'Keep emergency medical kits stocked for heatstroke.'
        ],
        donts: [
            'Do not perform overhead watering during solar peak (scorch risk).',
            'Never apply oil-based organic pesticides in temperatures > 30°C.',
            'Prohibit leaving harvested fruit in direct sunlight for any duration.',
            'Do not use dark-colored plastic mulches without cooling covers.',
            'Never prune woody biomass or fruiting stems during heat spikes.',
            'Avoid transplanting young seedlings during high-VPD windows.',
            'Do not apply high-nitrogen synthetic fertilizers (increases water stress).',
            'Never leave cold-chain vehicles idling without refrigeration active.',
            'Prohibit labor in open fields without UV-rated protective gear.',
            'Do not ignore stoma-closure signals in sensitive fruit crops.',
            'Avoid digging or tilling; it releases soil moisture.',
            'Do not turn off ventilation fans at night if temps remain high.',
            'Never allow livestock to run out of water.',
            'Do not stack crates tightly; allow airflow.',
            'Avoid using sulfur-based sprays (phytotoxicity risk).',
            'Do not ignore signs of flagging in canopy tops.',
            'Never leave hoses in the sun (hot water burns plants).',
            'Do not schedule heavy transport during peak heat.',
            'Avoid planting cool-season crops like lettuce.',
            'Do not stress machinery; engines overheat easily.',
            'Never ignore a worker complaining of dizziness.',
            'Do not open cold rooms unnecessarily.',
            'Avoid using black irrigation tubing on the surface.',
            'Do not let greenhouse temperatures exceed 40°C.',
            'Never assume "wilted" means "dead" immediately.'
        ]
    },
    'pathogen': {
        dos: [
            'Check leaf undersides for fungal spores daily at sunrise.',
            'Isolate any plant showing localized wilting or spotting immediately.',
            'Sanitize all pruning tools with 70% isopropyl after every use.',
            'Increase airflow in greenhouses to keep relative humidity below 75%.',
            'Monitor aphid and whitefly populations using yellow sticky traps.',
            'Apply beneficial mycorrhizae to roots to enhance fungal resistance.',
            'Maintain a 5-meter weed-free buffer around all primary crop zones.',
            'Record the exact GPS coordinates of any identified pathogen clusters.',
            'Deploy pheromone traps to disrupt mating cycles of targeted moth species.',
            'Utilize ultra-fine insect netting over high-value brassica crops.',
            'Release predatory mites for spider mite control.',
            'Use copper sprays as a preventative bactericide.',
            'Remove lower leaves to improve air circulation.',
            'Solarize soil in empty beds to kill nematodes.',
            'Wash hands thoroughly before entering production zones.',
            'Install footbaths with disinfectant at all entry points.',
            'Rotate chemical modes of action to prevent resistance.',
            'Inspect incoming nursery stock for hitchhikers.',
            'Use drip irrigation to keep foliage dry.',
            'Burn infected plant material far from the field.',
            'Monitor humidity sensors for "disease danger" hours.',
            'Apply Bacillus thuringiensis (Bt) for caterpillar control.',
            'Keep equipment tires clean of mud and debris.',
            'Scout fields in a "W" pattern for representative sampling.',
            'Consult local extension offices for regional alerts.'
        ],
        donts: [
            'Never touch healthy plants after handling infected tissue without washing.',
            'Do not ignore early signs of powdery mildew in high-density foliage.',
            'Never move soil from a known "wilt zone" to a sterile zone.',
            'Avoid overhead irrigation when fungal spore alerts are active.',
            'Do not leave diseased crop residues in the field after harvest.',
            'Never use broad-spectrum insecticides that kill beneficial ladybugs.',
            'Do not skip the 14-day quarantine for all new incoming plant stock.',
            'Avoid wearing brightly colored clothing that attracts thrips into bays.',
            'Never allow unauthorized personnel to enter the biosecurity perimeter.',
            'Do not rely solely on chemical cures; prioritize preventive immunity.',
            'Avoid planting the same crop family in the same spot sequentially.',
            'Do not compost diseased material.',
            'Never use unsterilized pots or trays.',
            'Do not ignore ants; they often farm aphids.',
            'Avoid high nitrogen which promotes soft, tasty growth for pests.',
            'Do not spray when bees are foraging.',
            'Never leave open wounds on trees unsealed.',
            'Do not use untreated river water for foliar sprays.',
            'Avoid overcrowding plants.',
            'Do not let weeds bridge the gap between fields.',
            'Never ignore a sudden drop in yield.',
            'Do not assume a spot is "just a burn".',
            'Avoid using dirty gloves.',
            'Do not bring supermarket produce into the greenhouse.',
            'Never delay treatment once a threshold is crossed.'
        ]
    },
    'ph1': {
        title: '📦 Harvest Handling',
        dos: ['Harvest at physiological maturity.','Sanitize all cutting blades with isopropyl.','Keep harvest in shade immediately.','Handle produce gently to avoid bruising.','Sort by Grade A/B/C in the field.','Remove field heat rapidly.','Use only food-grade plastic bins.','Trim excess foliage to reduce weight.','Calibrate weighing scales daily.','Label crates with time and block ID.'],
        donts: ['Do not drop produce > 10cm.','Do not harvest crops while wet.','Avoid rusty or splintered bins.','Do not stack fruit > 3 layers deep.','Never leave crates on raw soil.','Avoid harvesting during solar noon.','Do not mix different maturity stages.','Never use non-potable water for cleaning.','Do not over-fill crates to the top.','Never ignore field-heat metrics.']
    },
    'ph2': {
        title: '❄️ Pre-Cooling',
        dos: ['Cool within 2 hours of picking.','Use forced-air cooling for greens.','Maintain 90-95% relative humidity.','Monitor core temps with probes.','Ensure adequate pallet airflow spacing.','Pre-cool storage containers before use.','Clean water with organic sanitisers.','Check fan belts weekly for slips.','Stagger intake of warm field loads.','Record cooling time-to-target batch.'],
        donts: ['Do not use dirty or recycled water.','Do not block air vents with pallets.','Do not freeze tropical crops.','Do not mix warm and cooled loads.','Never ignore humidity drops < 80%.','Avoid opening cooler doors frequently.','Do not store onions near porous fruit.','Never allow ice build-up on coils.','Do not leave produce in pre-cooler too long.','Avoid cooling crops prone to skin cracks.']
    },
    'ph3': {
        title: '🏠 Cold Storage',
        dos: ['Sanitize walls weekly.','Implement FIFO stock logic.','Use ethylene scrubbing agents.','Inspect daily for signs of mold.','Monitor CO2 levels hourly.','Maintain dedicated temp zones.','Calibrate thermometers monthly.','Keep racks 15cm from walls.','Test emergency backup power.','Record air-speed across pallets.'],
        donts: ['Do not store onions with fruit.','Never store produce on concrete.','Avoid standing water in the room.','Do not mix old and new batches.','Never ignore a strange odor in storage.','Do not block thermostats with bins.','Avoid light exposure for potatoes.','Never turn off humidifiers at night.','Do not exceed rack weight limits.','Never smoke in the storage area.']
    },
    'ph4': {
        title: '🚚 Transport Logistics',
        dos: ['Pre-cool truck before loading.','Secure all pallets tightly.','Optimize delivery routes for speed.','Log temperature in transit.','Sanitize truck after every load.','Inspect reefer seals daily.','Load trucks in reverse drop order.','Train drivers on cold-chain logs.','Monitor tire pressure for vibration.','Use thermal curtains when loading.'],
        donts: ['Avoid rough driving or braking.','Keep truck doors closed tightly.','No idling engines during loading.','Do not overload truck axles.','Never transport with fuel or oil.','Do not ignore reefer alarm codes.','Avoid parking in direct sunlight.','Never allow unauthorized access.','Do not stack to the ceiling.','Never skip post-trip sanitation.']
    },
    'pd1': {
        title: '🔍 Disease ID',
        dos: ['Check leaf undersides for spores.','Note spore color precisely.','Isolate suspect plants immediately.','Utilize 10x magnification lenses.','Photograph symptoms for logs.','Cross-reference with local database.','Send tissue samples to the lab.','Check for root galls on stunted plants.','Monitor insect vector population.','Record date of first sighting sighting.'],
        donts: ['Do not touch healthy plants after sick ones.','Never guess a disease; test it.','Do not ignore localized wilting.','No tool sharing between blocks.','Never move soil from infected zones.','Do not ignore pigmentation changes.','Never assume it is just heat stress.','Avoid visiting infected zones in dew.','Do not leave infected debris in field.','Never delay reporting an outbreak.']
    },
    'pd2': {
        title: '🛡️ Prevention',
        dos: ['Rotate crops every 3 years.','Sterilize boots before entry.','Use certified clean seeds.','Maintain wide airflow spacing.','Encourage beneficial predators.','Plant resistant cultivars only.','Apply mycorrhizal root fungi.','Keep field perimeters weed-free.','Conduct seasonal soil health audits.','Ensure drainage is 100% functional.'],
        donts: ['Stop overhead irrigation if fungus appears.','Do not crowd plants too densely.','Avoid soil work in wet weather.','Avoid excess nitrogen fertilization.','Never use fresh manure as feed.','Do not ignore early leaf yellowing.','Never allow weeds to go to seed.','Avoid over-watering clay soils.','Do not skip season cleanup.','Never allow contaminated nursery water.']
    },
    'pd3': {
        title: '💧 Resource Health',
        dos: ['Test soil pH every 3 months.','Use drip irrigation exclusively.','Apply only aged organic compost.','Check water for bacterial load.','Aerate compacted soil layers.','Maintain buffer zones for water.','Install filtration for surface water.','Monitor soil salinity monthly.','Use cover crops for erosion control.','Service all water pumps regularly.'],
        donts: ['Never allow stagnant pools to form.','No raw manure on edible crops.','No heavy machinery on wet soil.','Never ignore rising salinity levels.','Do not use untreated well water.','Avoid over-fertilizing soil biology.','Never leave soil bare and exposed.','Do not ignore signs of crusting.','Avoid tilling disrupted fungal networks.','Never dump chemicals near intakes.']
    },
    'pd4': {
        title: '🧪 Organic Rx',
        dos: ['Use Neem oil for pest outbreaks.','Apply baking soda for mildew.','Spray treatments at dawn only.','Prune and burn infected parts.','Use garlic sprays as repellents.','Utilize Bt for caterpillar control.', 'Calibrate sprayers for even mist.','Test sprays on a few leaves first.','Keep records of all spray dates.','Wear PPE during organic application.'],
        donts: ['No sulfur during heat spikes.','Do not kill beneficial bees.','Do not store pre-mixed sprays.','Do not spray wilted plants.','Never spray when wind > 15km/h.','Do not exceed dilution ratios.','Never spray during active rain.','Do not ignore harvest intervals.','Avoid spraying when bees are active.','Never reuse chemical containers.']
    }
};

/* * ==========================================================================
 * SUB-SECTION: GLOBAL MARKET DATASET 
 * Expanded to include 120+ commodities, now with 'category' tags
 * to support the column view (Fruit / Vegetable / Grain-Lentil).
 * ==========================================================================
 */
const COMMODITIES = [
    /* FRUITS */
    { name: 'Apple (Fuji)', price: 2.45, category: 'fruit', trend: 'down' },
    { name: 'Apple (Gala)', price: 2.20, category: 'fruit', trend: 'up' },
    { name: 'Apple (Granny Smith)', price: 2.60, category: 'fruit', trend: 'down' },
    { name: 'Mango (Alphonso)', price: 4.80, category: 'fruit', trend: 'up' },
    { name: 'Mango (Keitt)', price: 3.90, category: 'fruit', trend: 'down' },
    { name: 'Banana (Cavendish)', price: 0.75, category: 'fruit', trend: 'up' },
    { name: 'Banana (Plantain)', price: 1.10, category: 'fruit', trend: 'up' },
    { name: 'Grapes (Red Seedless)', price: 3.20, category: 'fruit', trend: 'up' },
    { name: 'Grapes (Green Seedless)', price: 3.50, category: 'fruit', trend: 'down' },
    { name: 'Strawberry (Organic)', price: 5.50, category: 'fruit', trend: 'down' },
    { name: 'Pineapple (Gold)', price: 3.50, category: 'fruit', trend: 'up' },
    { name: 'Avocado (Hass)', price: 2.90, category: 'fruit', trend: 'up' },
    { name: 'Avocado (Fuerte)', price: 2.40, category: 'fruit', trend: 'down' },
    { name: 'Lemon (Meyer)', price: 0.50, category: 'fruit', trend: 'up' },
    { name: 'Lime (Persian)', price: 0.45, category: 'fruit', trend: 'up' },
    { name: 'Blueberry (Fresh)', price: 6.00, category: 'fruit', trend: 'up' },
    { name: 'Raspberry (Fresh)', price: 7.50, category: 'fruit', trend: 'down' },
    { name: 'Blackberry (Fresh)', price: 8.00, category: 'fruit', trend: 'up' },
    { name: 'Kiwi (Gold)', price: 2.20, category: 'fruit', trend: 'down' },
    { name: 'Kiwi (Green)', price: 1.80, category: 'fruit', trend: 'up' },
    { name: 'Papaya (Solo)', price: 1.80, category: 'fruit', trend: 'up' },
    { name: 'Dragonfruit (Red)', price: 5.50, category: 'fruit', trend: 'up' },
    { name: 'Dragonfruit (White)', price: 4.50, category: 'fruit', trend: 'down' },
    { name: 'Lychee (Fresh)', price: 4.20, category: 'fruit', trend: 'down' },
    { name: 'Pomegranate', price: 2.80, category: 'fruit', trend: 'up' },
    { name: 'Fig (Black Mission)', price: 5.00, category: 'fruit', trend: 'up' },
    { name: 'Date (Medjool)', price: 8.50, category: 'fruit', trend: 'down' },
    { name: 'Watermelon (Seedless)', price: 0.45, category: 'fruit', trend: 'up' },
    { name: 'Cantaloupe', price: 0.90, category: 'fruit', trend: 'down' },
    { name: 'Honeydew Melon', price: 1.10, category: 'fruit', trend: 'up' },
    { name: 'Peach (Yellow)', price: 2.80, category: 'fruit', trend: 'up' },
    { name: 'Nectarine', price: 2.90, category: 'fruit', trend: 'down' },
    { name: 'Plum (Black)', price: 2.50, category: 'fruit', trend: 'up' },
    { name: 'Cherry (Bing)', price: 6.50, category: 'fruit', trend: 'up' },
    { name: 'Pear (Bartlett)', price: 1.90, category: 'fruit', trend: 'down' },
    { name: 'Orange (Navel)', price: 1.20, category: 'fruit', trend: 'up' },
    { name: 'Grapefruit (Ruby)', price: 1.40, category: 'fruit', trend: 'up' },
    { name: 'Tangerine', price: 1.60, category: 'fruit', trend: 'down' },
    { name: 'Passion Fruit', price: 4.00, category: 'fruit', trend: 'up' },
    { name: 'Guava', price: 3.00, category: 'fruit', trend: 'up' },
    { name: 'Persimmon', price: 2.50, category: 'fruit', trend: 'down' },

    /* VEGETABLES */
    { name: 'Tomato (Roma)', price: 1.25, category: 'veg', trend: 'up' },
    { name: 'Tomato (Beefsteak)', price: 1.80, category: 'veg', trend: 'down' },
    { name: 'Tomato (Cherry)', price: 3.50, category: 'veg', trend: 'up' },
    { name: 'Onion (Red)', price: 0.85, category: 'veg', trend: 'down' },
    { name: 'Onion (Yellow)', price: 0.65, category: 'veg', trend: 'up' },
    { name: 'Potato (Gold)', price: 0.95, category: 'veg', trend: 'up' },
    { name: 'Potato (Russet)', price: 0.60, category: 'veg', trend: 'down' },
    { name: 'Spinach (Baby)', price: 2.10, category: 'veg', trend: 'up' },
    { name: 'Carrot (Heirloom)', price: 1.50, category: 'veg', trend: 'up' },
    { name: 'Carrot (Orange)', price: 0.90, category: 'veg', trend: 'down' },
    { name: 'Cabbage (Green)', price: 0.60, category: 'veg', trend: 'up' },
    { name: 'Cabbage (Red)', price: 0.80, category: 'veg', trend: 'up' },
    { name: 'Cucumber (English)', price: 1.15, category: 'veg', trend: 'down' },
    { name: 'Broccoli (Crowns)', price: 2.30, category: 'veg', trend: 'down' },
    { name: 'Cauliflower', price: 1.95, category: 'veg', trend: 'up' },
    { name: 'Bell Pepper (Red)', price: 3.20, category: 'veg', trend: 'up' },
    { name: 'Bell Pepper (Green)', price: 2.50, category: 'veg', trend: 'down' },
    { name: 'Garlic (Bulk)', price: 6.20, category: 'veg', trend: 'down' },
    { name: 'Ginger (Root)', price: 4.40, category: 'veg', trend: 'up' },
    { name: 'Corn (Sweet)', price: 0.45, category: 'veg', trend: 'down' },
    { name: 'Pumpkin (Sugar)', price: 0.30, category: 'veg', trend: 'up' },
    { name: 'Squash (Butternut)', price: 0.60, category: 'veg', trend: 'down' },
    { name: 'Zucchini (Green)', price: 0.70, category: 'veg', trend: 'up' },
    { name: 'Eggplant (Italian)', price: 1.10, category: 'veg', trend: 'down' },
    { name: 'Okra (Green)', price: 2.50, category: 'veg', trend: 'up' },
    { name: 'Peas (Sugar Snap)', price: 3.00, category: 'veg', trend: 'up' },
    { name: 'Bean (Green)', price: 1.80, category: 'veg', trend: 'down' },
    { name: 'Mushrooms (Oyster)', price: 6.50, category: 'veg', trend: 'up' },
    { name: 'Mushrooms (Shiitake)', price: 8.00, category: 'veg', trend: 'up' },
    { name: 'Wasabi (Root)', price: 150.00, category: 'veg', trend: 'up' },
    { name: 'Turmeric (Fresh)', price: 3.50, category: 'veg', trend: 'up' },
    { name: 'Chili (Ghost)', price: 25.00, category: 'veg', trend: 'up' },
    { name: 'Kale (Lacinato)', price: 2.00, category: 'veg', trend: 'up' },
    { name: 'Arugula (Wild)', price: 3.00, category: 'veg', trend: 'down' },
    { name: 'Swiss Chard', price: 1.80, category: 'veg', trend: 'up' },
    { name: 'Bok Choy', price: 1.20, category: 'veg', trend: 'up' },
    { name: 'Watercress', price: 4.00, category: 'veg', trend: 'down' },
    { name: 'Endive', price: 3.50, category: 'veg', trend: 'up' },
    { name: 'Radicchio', price: 2.80, category: 'veg', trend: 'down' },
    { name: 'Asparagus', price: 3.20, category: 'veg', trend: 'up' },
    { name: 'Artichoke', price: 2.50, category: 'veg', trend: 'up' },
    { name: 'Celery', price: 0.90, category: 'veg', trend: 'down' },
    { name: 'Leek', price: 1.40, category: 'veg', trend: 'up' },
    { name: 'Shallot', price: 2.00, category: 'veg', trend: 'up' },
    { name: 'Beetroot (Red)', price: 1.10, category: 'veg', trend: 'up' },
    { name: 'Radish (Daikon)', price: 0.95, category: 'veg', trend: 'down' },
    { name: 'Fennel (Bulb)', price: 2.60, category: 'veg', trend: 'up' },

    /* LENTILS / GRAINS / OTHERS */
    { name: 'Lentil (Red Split)', price: 1.20, category: 'grain', trend: 'up' },
    { name: 'Lentil (Green)', price: 1.30, category: 'grain', trend: 'up' },
    { name: 'Lentil (Black Beluga)', price: 2.50, category: 'grain', trend: 'down' },
    { name: 'Lentil (Brown)', price: 1.10, category: 'grain', trend: 'up' },
    { name: 'Chickpea (Garbanzo)', price: 1.10, category: 'grain', trend: 'down' },
    { name: 'Chickpea (Kala Chana)', price: 1.25, category: 'grain', trend: 'up' },
    { name: 'Wheat (Durum)', price: 0.35, category: 'grain', trend: 'up' },
    { name: 'Wheat (Soft Red)', price: 0.30, category: 'grain', trend: 'down' },
    { name: 'Rice (Basmati)', price: 1.80, category: 'grain', trend: 'up' },
    { name: 'Rice (Jasmine)', price: 1.60, category: 'grain', trend: 'up' },
    { name: 'Rice (Brown)', price: 1.40, category: 'grain', trend: 'down' },
    { name: 'Rice (Arborio)', price: 2.10, category: 'grain', trend: 'up' },
    { name: 'Soybean (Non-GMO)', price: 0.90, category: 'grain', trend: 'down' },
    { name: 'Quinoa (White)', price: 3.50, category: 'grain', trend: 'up' },
    { name: 'Quinoa (Red)', price: 3.80, category: 'grain', trend: 'up' },
    { name: 'Chia Seeds', price: 5.00, category: 'grain', trend: 'down' },
    { name: 'Flax Seeds', price: 2.00, category: 'grain', trend: 'up' },
    { name: 'Sunflower Seeds', price: 1.50, category: 'grain', trend: 'down' },
    { name: 'Hemp Hearts', price: 8.00, category: 'grain', trend: 'up' },
    { name: 'Oats (Rolled)', price: 0.80, category: 'grain', trend: 'up' },
    { name: 'Oats (Steel Cut)', price: 1.10, category: 'grain', trend: 'up' },
    { name: 'Barley (Pearl)', price: 0.90, category: 'grain', trend: 'down' },
    { name: 'Millet', price: 1.00, category: 'grain', trend: 'up' },
    { name: 'Buckwheat', price: 1.50, category: 'grain', trend: 'up' },
    { name: 'Coffee (Arabica)', price: 12.50, category: 'grain', trend: 'up' },
    { name: 'Cocoa (Beans)', price: 9.20, category: 'grain', trend: 'up' },
    { name: 'Sugar (Cane)', price: 0.40, category: 'grain', trend: 'down' },
    { name: 'Cotton (Lint)', price: 1.10, category: 'grain', trend: 'up' },
    { name: 'Tea (Black)', price: 8.50, category: 'grain', trend: 'down' },
    { name: 'Olive Oil (Extra)', price: 14.00, category: 'grain', trend: 'up' },
    { name: 'Vanilla (Pod)', price: 250.00, category: 'grain', trend: 'up' },
    { name: 'Saffron (Grade A)', price: 1500.00, category: 'grain', trend: 'up' },
    { name: 'Almond (Raw)', price: 6.50, category: 'grain', trend: 'down' },
    { name: 'Walnut (Shelled)', price: 7.20, category: 'grain', trend: 'up' },
    { name: 'Cashew (Whole)', price: 9.00, category: 'grain', trend: 'up' },
    { name: 'Pistachio (Roasted)', price: 11.00, category: 'grain', trend: 'down' },
    { name: 'Truffle (Black)', price: 1200.00, category: 'grain', trend: 'down' },
    { name: 'Cinnamon (Stick)', price: 15.00, category: 'grain', trend: 'down' },
    { name: 'Cardamom (Green)', price: 30.00, category: 'grain', trend: 'up' },
    { name: 'Clove (Whole)', price: 20.00, category: 'grain', trend: 'up' },
    { name: 'Pepper (Black)', price: 8.00, category: 'grain', trend: 'down' },
    { name: 'Honey (Manuka)', price: 45.00, category: 'grain', trend: 'up' },
    { name: 'Maple Syrup', price: 12.00, category: 'grain', trend: 'down' }
];

/* * ==========================================================================
 * SUB-SECTION: ENCYCLOPEDIA CONTENT 
 * A massive static dataset for the Encyclopedia module.
 * ==========================================================================
 */
const ENCYCLOPEDIA_DATA = [
    {
        title: "Hydroponic Systems",
        content: "Hydroponics is a method of growing plants without soil, using mineral nutrient solutions in a water solvent. Key types include Nutrient Film Technique (NFT), Deep Water Culture (DWC), and Ebb and Flow. NFT uses a shallow stream of water containing all the dissolved nutrients required for plant growth. DWC suspends plant roots in a solution of nutrient-rich, oxygenated water. Ebb and Flow floods and drains the root zone."
    },
    {
        title: "Aquaponics Integration",
        content: "Aquaponics combines raising fish (aquaculture) and growing plants without soil (hydroponics). The nutrient-rich water from the fish tank provides a natural fertilizer for the plants and the plants help to purify the water for the fish. Common fish used include Tilapia, Trout, and Catfish. The system relies on nitrifying bacteria to convert ammonia into nitrates."
    },
    {
        title: "Permaculture Principles",
        content: "Permaculture is an approach to land management and settlement design that adopts arrangements observed in flourishing natural ecosystems. It includes a set of design principles derived using whole-systems thinking. Key principles: Observe and Interact, Catch and Store Energy, Obtain a Yield, Apply Self-Regulation, Use Renewable Resources, Produce No Waste, Design from Patterns to Details."
    },
    {
        title: "Soil Microbiology",
        content: "Soil microbiology is the study of organisms in soil, their functions, and how they affect soil properties. A teaspoon of healthy soil can contain billions of microbes. Bacteria, fungi, protozoa, and nematodes play crucial roles in nutrient cycling, organic matter decomposition, and soil structure formation. Mycorrhizal fungi form symbiotic relationships with plant roots."
    },
    {
        title: "Integrated Pest Management (IPM)",
        content: "IPM is an ecosystem-based strategy that focuses on long-term prevention of pests or their damage through a combination of techniques such as biological control, habitat manipulation, modification of cultural practices, and use of resistant varieties. Pesticides are used only after monitoring indicates they are needed according to established guidelines, and treatments are made with the goal of removing only the target organism."
    },
    {
        title: "Regenerative Agriculture",
        content: "Regenerative agriculture is a conservation and rehabilitation approach to food and farming systems. It focuses on topsoil regeneration, increasing biodiversity, improving the water cycle, enhancing ecosystem services, supporting biosequestration, increasing resilience to climate change, and strengthening the health and vitality of farm soil. Practices include no-till farming and cover cropping."
    },
    {
        title: "Photosynthetically Active Radiation (PAR)",
        content: "PAR designates the spectral range (wave band) of solar radiation from 400 to 700 nanometers that organisms use in the process of photosynthesis. This spectral region corresponds more or less with the range of light visible to the human eye. PAR measurement is critical in greenhouse management to ensure plants receive optimal light energy."
    },
    {
        title: "Vapor Pressure Deficit (VPD)",
        content: "VPD is the difference between the amount of moisture in the air and how much moisture the air can hold when it is saturated. It combines temperature and relative humidity to give a more accurate representation of the drying power of the atmosphere. Managing VPD is crucial for controlling transpiration rates in controlled environment agriculture."
    },
    {
        title: "Cation Exchange Capacity (CEC)",
        content: "CEC is a useful indicator of soil fertility because it shows the soil's ability to supply three important plant nutrients: calcium, magnesium, and potassium. It measures the number of negatively charged sites on soil particles that can bind positively charged atoms or molecules (cations). High CEC soils can hold more nutrients."
    },
    {
        title: "Companion Planting",
        content: "Companion planting is the planting of different crops in proximity for any of a number of different reasons, including pest control, pollination, providing habitat for beneficial insects, maximizing use of space, and otherwise increasing crop productivity. Examples include the 'Three Sisters' (corn, beans, squash) and planting basil with tomatoes."
    }
];

/* * ==========================================================================
 * SUB-SECTION: STATE MANAGEMENT
 * ==========================================================================
 */
let cart = [];

/* * ==========================================================================
 * SUB-SECTION: UI HELPER FUNCTIONS 
 * ==========================================================================
 */
function showToast(msg) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = msg;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 600);
    }, 4500);
}

/* * ==========================================================================
 * SUB-SECTION: CART LOGIC (With +/-)
 * ==========================================================================
 */
function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);
    if(existing) { 
        existing.qty++; 
    } else { 
        cart.push({ name, price, qty: 1 }); 
    }
    updateCartUI();
    showToast(`SUCCESS: ${name} synced to procurement list.`);
}

function changeQty(index, delta) {
    // Modify the quantity
    cart[index].qty += delta;
    
    // If quantity hits 0 or less, remove the item entirely
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    
    // Refresh the view
    updateCartUI();
}

function updateCartUI() {
    const count = cart.reduce((acc, item) => acc + item.qty, 0);
    document.getElementById('cart-count-badge').innerText = count;
    
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total');
    
    if(cart.length === 0) {
        container.innerHTML = `<div class="standard-card">Queue is Empty. Awaiting Sovereign selection...</div>`;
        totalEl.innerText = "$0"; 
        return;
    }
    
    let html = ''; 
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.qty;
        total += itemTotal;
        
        // Render +/- buttons alongside removal
        html += `
        <div class="standard-card" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:20px;">
            <div style="flex: 1;">
                <b style="font-size:2.2em; color:var(--jade-glow);">${item.name}</b><br>
                <span style="color:var(--text-muted); font-size:1.5em;">Price: $${item.price}</span>
            </div>
            
            <div style="display:flex; align-items:center; gap:15px;">
                <button class="cart-btn" onclick="changeQty(${index}, -1)">-</button>
                
                <span style="font-weight:bold; font-size:2em; min-width:50px; text-align:center;">${item.qty}</span>
                
                <button class="cart-btn" onclick="changeQty(${index}, 1)">+</button>
                
                <button class="cart-btn" onclick="removeFromCart(${index})" style="background:var(--alert-red); margin-left:15px;">🗑️</button>
            </div>
        </div>`;
    });
    
    container.innerHTML = html;
    totalEl.innerText = "$" + total.toFixed(2);
}

function removeFromCart(index) { 
    cart.splice(index, 1); 
    updateCartUI(); 
}

function finalizeOrder() {
    if(cart.length === 0) return;
    showToast("AUTHENTICATING: Secure Acquisition Tunnel Active...");
    setTimeout(() => { 
        cart = []; 
        updateCartUI(); 
        nav('home'); 
    }, 3000);
}

/* * ==========================================================================
 * SUB-SECTION: NAVIGATION LOGIC 
 * ==========================================================================
 */
function nav(id) {
    document.querySelectorAll('.page').forEach(p => { 
        p.classList.remove('active'); 
        p.style.display = 'none'; 
    });
    const target = document.getElementById(id);
    target.style.display = 'block';
    setTimeout(() => { 
        target.classList.add('active'); 
    }, 50);
    window.scrollTo(0,0);
}

/* * ==========================================================================
 * SUB-SECTION: RENDERERS 
 * ==========================================================================
 */
function renderProtocols() {
    // Rain
    document.getElementById('rain-dos').innerHTML = KNOWLEDGE_BASE.rain.dos.map(i => `<li>${i}</li>`).join('');
    document.getElementById('rain-donts').innerHTML = KNOWLEDGE_BASE.rain.donts.map(i => `<li>${i}</li>`).join('');
    
    // Heat
    document.getElementById('heat-dos').innerHTML = KNOWLEDGE_BASE.heat.dos.map(i => `<li>${i}</li>`).join('');
    document.getElementById('heat-donts').innerHTML = KNOWLEDGE_BASE.heat.donts.map(i => `<li>${i}</li>`).join('');
    
    // Pathogen
    document.getElementById('path-dos').innerHTML = KNOWLEDGE_BASE.pathogen.dos.map(i => `<li>${i}</li>`).join('');
    document.getElementById('path-donts').innerHTML = KNOWLEDGE_BASE.pathogen.donts.map(i => `<li>${i}</li>`).join('');
}

/*
    * NEW MARKET RENDERER (SPLIT BY TYPE)
    * Filters the global commodity list into 3 distinct columns.
    */
function renderMarketItems() {
    // Filter Data
    const fruits = COMMODITIES.filter(c => c.category === 'fruit');
    const veg = COMMODITIES.filter(c => c.category === 'veg');
    const grains = COMMODITIES.filter(c => c.category === 'grain');

    // Render Function Helper
    const generateHTML = (list) => list.map(c => `
        <div class="market-item">
            <div style="flex:1;">
                <div style="font-weight:bold; font-size:1.3em;">${c.name}</div>
                <div style="color:var(--text-muted); font-size:0.9em;">Global Avg.</div>
            </div>
            <div style="text-align:right;">
                <div class="tele-val ${c.trend === 'up' ? 'price-up' : 'price-down'}" style="font-size:1.8em; margin:0;">
                    $${c.price.toFixed(2)}
                </div>
                <div style="font-weight:bold; font-size:0.8em;">
                    ${c.trend === 'up' ? '▲ UP' : '▼ DOWN'}
                </div>
            </div>
        </div>
    `).join('');

    // Inject HTML
    document.getElementById('market-list-fruit').innerHTML = generateHTML(fruits);
    document.getElementById('market-list-veg').innerHTML = generateHTML(veg);
    document.getElementById('market-list-grain').innerHTML = generateHTML(grains);
    
    // Ticker Logic (Aggregated)
    const ticker = document.getElementById('ticker-text');
    ticker.innerText = COMMODITIES.map(c => `${c.name}: $${c.price.toFixed(2)} (${c.trend.toUpperCase()})`).join(' | ');
}

function renderEncyclopedia() {
    const container = document.getElementById('encyclopedia-content');
    container.innerHTML = ENCYCLOPEDIA_DATA.map(e => `
        <div class="standard-card" style="cursor:default;">
            <h3 style="font-size:2.5em; color:var(--gold-accent); border-bottom:1px solid #333; padding-bottom:15px;">${e.title}</h3>
            <p style="font-size:1.3em; margin-top:20px;">${e.content}</p>
        </div>
    `).join('');
}

function calculateDiet() {
    const w = document.getElementById('weightInput').value;
    if(!w) return;
    const water = (w * 0.033).toFixed(2);
    const prot = (w * 1.2).toFixed(1);
    document.getElementById('dietResults').innerHTML = `
        <div class="standard-card">
            <h3>Precision Intake Goals</h3>
            <p>Target Hydration: ${water} Liters / Day</p>
            <p>Target Protein: ${prot} Grams / Day</p>
            <p>Status: Sovereign Optimized</p>
        </div>`;
}

function trackItem() {
    const name = document.getElementById('itemName').value;
    const date = document.getElementById('itemDate').value;
    if(!name || !date) return;
    const div = document.createElement('div');
    div.className = 'standard-card';
    div.style.display = 'flex'; 
    div.style.justifyContent = 'space-between';
    div.innerHTML = `
        <div><b>${name}</b><br>Expiry: ${date}</div> 
        <button onclick="this.parentElement.remove()" style="width:auto; padding:10px 30px; background:var(--alert-red);">REMOVE</button>`;
    document.getElementById('trackerList').prepend(div);
}

function renderSub(key) {
    const data = KNOWLEDGE_BASE[key];
    const container = document.getElementById('dynamic-sub');
    container.innerHTML = `
        <h2 style="font-size:4.5em;">${data.title}</h2>
        <div class="comparison-grid">
            <div class="comp-box">
                <h4 class="do-title">✅ Critical Do's</h4>
                <ul>${data.dos.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
            <div class="comp-box">
                <h4 class="dont-title">⛔ Critical Don'ts</h4>
                <ul>${data.donts.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
        </div>
        <button class="nav-back" onclick="nav('${key.startsWith('ph') ? 'ph-hub' : 'pd-hub'}')">← Back to Hub</button>`;
    nav('dynamic-sub');
}

function toggle(id) { 
    document.getElementById(id).classList.toggle('open'); 
}

/* * ==========================================================================
 * SUB-SECTION: INITIALIZATION & HEARTBEAT
 * ==========================================================================
 */
setInterval(() => {
    const d = new Date();
    document.getElementById('sys-clock').innerText = d.toLocaleDateString() + " | " + d.toLocaleTimeString();
    }, 1000);

(function init() {
    renderProtocols();
    renderMarketItems();
    renderEncyclopedia();
    
    // Atmospheric Animation Generation
    const layer = document.getElementById('animationLayer');
    
    // Generate Leaves
    for(let i=0; i<45; i++) {
        let l = document.createElement('div'); 
        l.className = 'leaf';
        l.innerText = ['🌿','🍃','🌱'][Math.floor(Math.random()*3)];
        l.style.left = '-15vw'; 
        l.style.top = Math.random()*100+'vh';
        l.style.animationDuration = (15 + Math.random()*25) + 's';
        l.style.animationDelay = Math.random()*30 + 's';
        layer.appendChild(l);
    }
    
    // Generate Wind Lines
    for(let i=0; i<15; i++) {
        let w = document.createElement('div'); 
        w.className = 'wind-line';
        w.style.top = Math.random()*100+'vh';
        w.style.animationDuration = (4 + Math.random()*5)+'s';
        layer.appendChild(w);
    }
    
    console.log("FRESHGUARD KERNEL LOADED: v12.0.1");
    console.log("MARKET DB: " + COMMODITIES.length + " Items Loaded.");
    console.log("ENCYCLOPEDIA: " + ENCYCLOPEDIA_DATA.length + " Articles Loaded.");
})();