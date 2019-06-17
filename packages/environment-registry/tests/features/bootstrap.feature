Feature: Create Environment registry extension for CapsulaHub

Scenario: EnvRegistry extension creates new instance of EnvRegistry while registering itself
  Given  a Workspace with EnvRegistry extension
  When  EnvRegistry extension registers itself to the Workspace
  Then  an EnvRegistry instance is available

Scenario: EnvRegistry extension tries to register with bad configuration
  Given  a Workspace with EnvRegistry extension
  When  EnvRegistry extension tries to register with a configuration with invalid format
  Then  an error is thrown
  
Scenario: EnvRegistry registers the provided environment
  Given A Workspace with EnvRegistry extension
  And  EnvRegistry with register method and a given environment
  When EnvRegistry extension registers itself to the Workspace
  And  EnvRegistry registers the environment
  And  an EnvRegistry instance with this environment is available