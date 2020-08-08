import { HTTPStore, openArray, slice } from 'zarr';

const ZarrChromsizesDataFetcher = function ZarrChromsizesDataFetcher(HGC, ...args) {

  if (!new.target) {
        throw new Error(
          'Uncaught TypeError: Class constructor cannot be invoked without "new"',
        );
    }

    const { slugid } = HGC.libraries;

    class ZarrChromsizesDataFetcherClass {
        constructor(dataConfig, pubSub) {
            this.dataConfig = dataConfig;
            this.pubSub = pubSub;
            this.trackUid = slugid.nice();

            console.log("ZarrChromsizesDataFetcherClass");
        
            if (dataConfig.url) {
              // console.assert(dataConfig.url.endsWith('.zarr'));
              // S3 bucket must have a CORS policy to allow reading from any origin.
              this.store = new HTTPStore(dataConfig.url);
            }
        }

        fetchChromsizes() {
            // TODO
        }

    } // end class
    return new ZarrChromsizesDataFetcherClass(...args);
} // end function wrapper


ZarrChromsizesDataFetcher.config = {
    type: 'zarr-chromsizes',
};

export default ZarrChromsizesDataFetcher;
