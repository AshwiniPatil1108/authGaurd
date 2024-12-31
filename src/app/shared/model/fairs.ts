export interface Ifairs {
    fairId: string;
    fairName: string;
    startDate: number;
    endDate: number;
    timezoneId: string;
    location:  IfairsLocation | null;
    numberOfUsersRegistered: number;
    numberOfSchoolsRegistered: number;
    isCandidateRegistered:boolean;
    bannerUrl: string;
    showRegisteredUsersToCandidate:boolean;
    showRegisteredUsersToSchools:boolean;
    showRegisteredSchoolsToCandidate:boolean;
    showRegisteredSchoolsToSchools:boolean;
    fairStatus: string;
    fairStartTime: string;
    fairEndTime: string;
    type: string;
    candidateDescription: string;
    schoolDescription: string;
  }
   export interface IfairsLocation {
    addressOne: string;
    addressTwo: string;
    city: string;
    state: string;
    country: string;
    zip: string;
  }