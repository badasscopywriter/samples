# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: phone.proto

require 'google/protobuf'

require 'google/protobuf/timestamp_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "phone.BridgedCallRequest" do
    optional :salesAgentId, :int32, 1
    optional :salesAgentPhone, :string, 2
    optional :customerPhone, :string, 3
    optional :customerName, :string, 4
    optional :hotelId, :int32, 5
    optional :hotelPhone, :string, 6
    optional :isTestCall, :bool, 7
  end
  add_message "phone.CallResponse" do
    optional :success, :bool, 1
    optional :message, :string, 2
    optional :id, :int32, 3
  end
  add_message "phone.HotelDid" do
    optional :did, :string, 1
    optional :franchise, :string, 2
    optional :city, :string, 3
    optional :state, :string, 4
    optional :id, :int32, 5
    optional :hotelId, :int32, 6
    optional :salesAgentId, :int32, 7
  end
  add_message "phone.DidResponse" do
    optional :success, :bool, 1
    optional :message, :string, 2
    repeated :dids, :message, 3, "phone.HotelDid"
  end
  add_message "phone.Contact" do
    optional :id, :int32, 1
    optional :name, :string, 2
    optional :phone, :string, 3
  end
  add_message "phone.CallDetailRecord" do
    optional :salesAgent, :message, 1, "phone.Contact"
    optional :customer, :message, 2, "phone.Contact"
    optional :hotel, :message, 3, "phone.Contact"
    optional :callSucceeded, :bool, 4
    optional :callAnswered, :bool, 5
    optional :callTimeInSeconds, :int32, 6
    optional :timestamp, :message, 7, "google.protobuf.Timestamp"
    optional :direction, :enum, 8, "phone.CallDetailRecord.Direction"
    optional :id, :int32, 9
    optional :legAId, :string, 10
    optional :legBId, :string, 11
    optional :hasVoicemail, :bool, 12
    optional :voicemailUrl, :string, 13
  end
  add_enum "phone.CallDetailRecord.Direction" do
    value :INBOUND, 0
    value :OUTBOUND, 1
  end
  add_message "phone.CallHistoryResponse" do
    optional :success, :bool, 1
    optional :message, :string, 2
    repeated :records, :message, 3, "phone.CallDetailRecord"
  end
  add_message "phone.DateRangeFilter" do
    optional :start, :message, 1, "google.protobuf.Timestamp"
    optional :end, :message, 2, "google.protobuf.Timestamp"
  end
  add_message "phone.Empty" do
  end
end

module Phone
  BridgedCallRequest = Google::Protobuf::DescriptorPool.generated_pool.lookup("phone.BridgedCallRequest").msgclass
  CallResponse = Google::Protobuf::DescriptorPool.generated_pool.lookup("phone.CallResponse").msgclass
  HotelDid = Google::Protobuf::DescriptorPool.generated_pool.lookup("phone.HotelDid").msgclass
  DidResponse = Google::Protobuf::DescriptorPool.generated_pool.lookup("phone.DidResponse").msgclass
  Contact = Google::Protobuf::DescriptorPool.generated_pool.lookup("phone.Contact").msgclass
  CallDetailRecord = Google::Protobuf::DescriptorPool.generated_pool.lookup("phone.CallDetailRecord").msgclass
  CallDetailRecord::Direction = Google::Protobuf::DescriptorPool.generated_pool.lookup("phone.CallDetailRecord.Direction").enummodule
  CallHistoryResponse = Google::Protobuf::DescriptorPool.generated_pool.lookup("phone.CallHistoryResponse").msgclass
  DateRangeFilter = Google::Protobuf::DescriptorPool.generated_pool.lookup("phone.DateRangeFilter").msgclass
  Empty = Google::Protobuf::DescriptorPool.generated_pool.lookup("phone.Empty").msgclass
end
