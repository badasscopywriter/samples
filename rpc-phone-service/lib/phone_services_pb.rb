# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: phone.proto for package 'phone'

require 'grpc'
require 'phone_pb'

module Phone
  module Phone
    # The Phone service definition.
    class Service

      include GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'phone.phone'

      rpc :GetHotelDids, Empty, DidResponse
      rpc :InitiateBridgedCall, BridgedCallRequest, CallResponse
      rpc :GetCallHistory, DateRangeFilter, CallHistoryResponse
      rpc :UpdateInProgressCalls, Empty, Empty
      rpc :UpdateIncomingCalls, Empty, Empty
    end

    Stub = Service.rpc_stub_class
  end
end
