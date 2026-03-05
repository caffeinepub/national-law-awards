import Time "mo:core/Time";
import Array "mo:core/Array";

actor {
  type Nomination = {
    submitterName : Text;
    organizationName : Text;
    awardCategory : Text;
    nomineeDescription : Text;
    timestamp : Time.Time;
  };

  var nominationList : [Nomination] = [];

  public shared ({ caller }) func submitNomination(submitterName : Text, organizationName : Text, awardCategory : Text, nomineeDescription : Text) : async () {
    let newNomination : Nomination = {
      submitterName;
      organizationName;
      awardCategory;
      nomineeDescription;
      timestamp = Time.now();
    };
    nominationList := nominationList.concat([newNomination]);
  };

  public query ({ caller }) func getNominationCount() : async Nat {
    nominationList.size();
  };

  public query ({ caller }) func getNominations() : async [Nomination] {
    nominationList;
  };
};
